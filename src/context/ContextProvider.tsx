import React, { createContext, useContext, useState } from 'react';

interface IThemeContext {
  color: string,
  currentMode: string,
  activeMenu: boolean,
  screenSize?: number,
  themeSettings: boolean,
  setScreenSize: (e: any) => void,
  setActiveMenu: (e: any) => void,
  setThemeColor: (e: any) => void,
  setCurrentMode: (e: any) => void,
  setMode: (e: any) => void,
  setThemeSettings: (e: any) => void
}

const defaultState: IThemeContext = {
  color: '#03C9D7',
  currentMode: 'Light',
  activeMenu: true,
  screenSize: 1200,
  themeSettings: false,
  setScreenSize: (e: any) => { },
  setActiveMenu: (e: any) => { },
  setThemeColor: (e: any) => { },
  setCurrentMode: (e: any) => { },
  setMode: (e: any) => { },
  setThemeSettings: (e: any) => { }
};

export const StateContext = createContext(defaultState);

const usePostsContextValue = (): IThemeContext => {
  const [screenSize, setScreenSize] = useState(undefined);
  const [color, setColor] = useState('#03C9D7');
  const [currentMode, setCurrentMode] = useState('Light');
  const [themeSettings, setThemeSettings] = useState(false);
  const [activeMenu, setActiveMenu] = useState(true);

  const setThemeColor = (color: string) => {
    setColor(color);
    localStorage.setItem('colorMode', color);
  };

  const setMode = (e: any) => {
    setCurrentMode(e.target.value);
    localStorage.setItem('themeMode', e.target.value);
  };

  return {
    color,
    currentMode,
    activeMenu,
    screenSize,
    setScreenSize,
    setActiveMenu,
    setThemeColor,
    setCurrentMode,
    setMode,
    themeSettings,
    setThemeSettings
  }
}
//facade pattern

const ContextProvider = ({ children }: any) => {
  const postsContextValue = usePostsContextValue();

  return (
    <StateContext.Provider value={postsContextValue}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
export default ContextProvider;

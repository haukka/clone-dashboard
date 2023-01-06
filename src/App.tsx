import React, { useEffect } from 'react';
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import './App.css';
import { useStateContext } from './context/ContextProvider';
import ThemeSettings from './components/ThemeSettings';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import RoutesComponent from './Routes';

const App = () => {
  const { setThemeColor, setCurrentMode, currentMode, activeMenu, themeSettings, setThemeSettings } = useStateContext();

  useEffect(() => {
    const currentThemeColor = localStorage.getItem('colorMode');
    const currentThemeMode = localStorage.getItem('themeMode');
    console.log('la');
    if (currentThemeColor && currentThemeMode) {
      setThemeColor(currentThemeColor);
      setCurrentMode(currentThemeMode);
    }
  }, [setCurrentMode, setThemeColor]);

  const handleThemeSettings = () => {
    setThemeSettings(true);
  }

  return (
    <div className={currentMode === 'Dark' ? 'dark' : ''}>
      <div className='flex relative dark:bg-main-dark-bg'>
        <div className='fixed bottom-4 right-4' style={{ zIndex: '1000' }}>
          <TooltipComponent content="Settings" position={'TopLeft'}>
            <button
              style={{ background: 'blue', borderRadius: '50%' }}
              onClick={handleThemeSettings}
              className='text-white text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray' type='button'>
              <FiSettings />
            </button>
          </TooltipComponent>
        </div>
        {activeMenu ? (
          <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white ">
            <Sidebar />
          </div>
        ) : null}
        <div
          className={
            activeMenu
              ? 'dark:bg-main-dark-bg  bg-main-bg min-h-screen md:ml-72 w-full  '
              : 'bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2 '
          }
        >
          <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full ">
            <Navbar />
          </div>
          <div>
            {themeSettings && (<ThemeSettings />)}
            <RoutesComponent />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

import React, { Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

const Line = React.lazy(() => import('./pages/Line'));
const Area = React.lazy(() => import('./pages/Area'));
const Pie = React.lazy(() => import('./pages/Pie'));

const RoutesComponent = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                <Route path="/" element={<Navigate to="/line" />} />
                <Route path="/line" element={<Line />} />
                <Route path="/area" element={<Area />} />
                <Route path="/pie" element={<Pie />} />
            </Routes>
        </Suspense>
    );
};

export default RoutesComponent;
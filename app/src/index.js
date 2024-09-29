import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import Login from "./modules/login/Login";
import HomePage from './modules/homePage/homePage';

import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/homepage" element={<HomePage />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>
);

reportWebVitals();

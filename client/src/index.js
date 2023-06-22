import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LogIn from './components/LogIn';
import SignUp from './components/SignUp';
import Dashboard from './components/Dashboard';
import Confirmation from './components/Confirmation';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import CustomizeShoe from './components/CustomizeShoe';
import Catalog from './components/Catalog';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="login" element={<LogIn />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="/Catalog" element={<Catalog />} />
        <Route path="/CustomizeShoe" element={<CustomizeShoe />} />
        <Route path="/Confirmation" element={<Confirmation />} />
        <Route path="dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

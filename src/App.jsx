import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './pages/authentication/Login'
import Register from './pages/authentication/Register'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MainPage from './pages/home/MainPage';
import ProtectedRoute from './protuctrouting/ProtuctRouter.jsx'


function App() {
  return (
    <BrowserRouter>
      <ToastContainer />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/"
          element={
            <ProtectedRoute> <MainPage /></ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App
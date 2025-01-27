import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = useSelector((state) => state.User); 

  //console.log(isAuthenticated);
  

  if (!isAuthenticated.data) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;

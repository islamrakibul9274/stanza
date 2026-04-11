import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = () => {
  // Check the local storage for the JWT token
  const token = localStorage.getItem('aether_token');

  // If no token exists, redirect to the Secure Portal
  if (!token) {
    return <Navigate to="/secure" replace />;
  }

  // If token exists, allow access to the child components
  return <Outlet />;
};

export default ProtectedRoute;
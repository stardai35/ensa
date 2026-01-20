import React from 'react';
import { Navigate } from 'react-router-dom';
import { authService } from '../api/authService';

function ProtectedRoute({ children }) {
  if (!authService.isAuthenticated()) {
    return <Navigate to="/admin/login" replace />;
  }
  return children;
}

export default ProtectedRoute;

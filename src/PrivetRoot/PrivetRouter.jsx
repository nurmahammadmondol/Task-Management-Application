import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { authContext } from '../Context/AuthProvider';

const PrivetRouter = ({ children }) => {
  const location = useLocation();
  const { user, loading } = useContext(authContext);

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center">
        <small className="text-center mb-1">Loading...</small>
        <progress className="progress w-56"></progress>
      </div>
    );
  }

  if (user) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivetRouter;

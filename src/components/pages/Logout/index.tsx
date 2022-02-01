import React, { FunctionComponent, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import useAuth from '@/hooks/useAuth';

const Logout: FunctionComponent = () => {
  const { logout, logoutRedirectPath } = useAuth();

  useEffect(() => {
    logout();
  }, []);

  return <Navigate to={logoutRedirectPath} />;
};

export default Logout;

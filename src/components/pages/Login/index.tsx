import React, { FunctionComponent, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import useAuth from '@/hooks/useAuth';

const Logout: FunctionComponent = () => {
  const { login, loginRedirectPath } = useAuth();

  useEffect(() => {
    login();
  }, []);

  return <Navigate to={loginRedirectPath} />;
};

export default Logout;

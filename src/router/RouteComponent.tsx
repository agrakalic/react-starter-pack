import React, { useEffect } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '@/hooks/useAuth';
import { Page } from '@/config';

type RouteComponentType = ({ page }: { page: Page }) => JSX.Element;

const RouteComponent: RouteComponentType = ({ page }) => {
  const { pathname } = useLocation();
  const { isAuthorized } = useAuth();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  if (page.restricted && !isAuthorized) return <Navigate to="/login" />;

  const Component = page.component;

  return <Component />;
};

export default RouteComponent;

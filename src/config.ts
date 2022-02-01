import { Home, Login, LoginForm, Logout, Page } from './components/pages';
import { FunctionComponent } from 'react';

export type Page = {
  id: string;
  component: FunctionComponent;
  exact?: boolean;
  title?: string;
  name: string;
  path: string;
  restricted: boolean;
};

type Pages = Array<Page>;

export const paths = {
  HOME: '/',
  LOGIN: '/in',
  LOGIN_FORM: '/login',
  LOGOUT: '/out',
  PAGE: '/page',
};

export const pages: Pages = [
  {
    id: '1',
    name: 'home',
    component: Home,
    path: paths.HOME,
    restricted: false,
  },
  {
    id: '2',
    name: 'login',
    component: Login,
    path: paths.LOGIN,
    restricted: false,
  },
  {
    id: '2',
    name: 'loginForm',
    component: LoginForm,
    path: paths.LOGIN_FORM,
    restricted: false,
  },
  {
    id: '3',
    name: 'logout',
    component: Logout,
    path: paths.LOGOUT,
    restricted: true,
  },
  {
    id: '4',
    name: 'page',
    component: Page,
    path: paths.PAGE,
    restricted: true,
  },
];

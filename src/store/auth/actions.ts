import { createAction } from '@reduxjs/toolkit';

export const authorizeUser = createAction('auth/authorizeUser');
export const unauthorizeUser = createAction('auth/unauthorizeUser');

export const authActions = {
  authorizeUser,
  unauthorizeUser,
};

import { createReducer } from '@reduxjs/toolkit';
import { AuthState } from './types';
import { authActions } from './actions';

export const initialAuthState: AuthState = {
  user: {
    isAuthorized: window.localStorage.getItem('auth') === 'true',
  },
};

export const authReducer = createReducer(initialAuthState, {
  [authActions.authorizeUser.type]: (state) => {
    return {
      ...state,
      user: {
        isAuthorized: true,
      },
    };
  },
  [authActions.unauthorizeUser.type]: (state) => {
    return {
      ...state,
      user: {
        isAuthorized: false,
      },
    };
  },
});

import { authorizeUser, unauthorizeUser } from '@/store/auth/actions';
import { RootState, useAppDispatch } from '@/store';
import { useSelector } from 'react-redux';
import { paths } from '@/config';

const LOCALSTORAGE_AUTH = 'auth';

const useAuth = () => {
  const dispatch = useAppDispatch();

  const loginRedirectPath = paths.HOME;
  const logoutRedirectPath = paths.HOME;
  const restrictedRedirectPath = paths.LOGIN_FORM;

  const login = () => {
    dispatch(authorizeUser());
    window.localStorage.setItem(LOCALSTORAGE_AUTH, 'true');
  };

  const logout = () => {
    dispatch(unauthorizeUser());
    window.localStorage.removeItem(LOCALSTORAGE_AUTH);
  };

  const isAuthorized = useSelector((state: RootState) => state.auth.user.isAuthorized);

  return {
    login,
    logout,
    loginRedirectPath,
    logoutRedirectPath,
    isAuthorized,
    restrictedRedirectPath,
  };
};

export default useAuth;

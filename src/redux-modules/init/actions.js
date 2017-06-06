import { createAction } from 'redux-actions';

export const AUTHENTICATE_USER = 'init/AUTHENTICATE_USER';

export const authenticateUser = createAction(AUTHENTICATE_USER);

export const LOGIN_USER = 'init/LOGIN_USER';

export const loginUser = createAction(LOGIN_USER, (user) => {
  return {
    currentUser: user,
  };
});

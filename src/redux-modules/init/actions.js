import { createAction } from 'redux-actions';

export const AUTHENTICATE_USER = 'init/AUTHENTICATE_USER';

export const authenticateUser = createAction(AUTHENTICATE_USER);

export const LOGIN_USER = 'init/LOGIN_USER';

export const loginUser = createAction(LOGIN_USER, (user) => {
  return {
    currentUser: user,
  };
});

export const LOG_IN_WITH_GOOGLE = 'init/LOG_IN_WITH_GOOGLE';

export const logInWithGoogle = createAction(LOG_IN_WITH_GOOGLE);

export const REQUEST_LOGIN = 'init/REQUEST_LOGIN';

export const requestLogin = createAction(REQUEST_LOGIN);

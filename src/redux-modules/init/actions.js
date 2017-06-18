import { createAction } from 'redux-actions';

export const AUTHENTICATE_USER = 'init/AUTHENTICATE_USER';

export const authenticateUser = createAction(AUTHENTICATE_USER);

export const LOAD_FIREBASE_DATA = 'persistence/LOAD_FIREBASE_DATA';

export const loadFirebaseData = createAction(LOAD_FIREBASE_DATA);

export const LOAD_LOCAL_STORAGE_DATA = 'persistence/LOAD_LOCAL_STORAGE_DATA';

export const loadLocalStorageData = createAction(LOAD_LOCAL_STORAGE_DATA);

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

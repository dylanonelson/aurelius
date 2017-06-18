import firebase from 'firebase';

import {
  AUTHENTICATE_USER,
  LOG_IN_WITH_GOOGLE,
  LOGIN_USER,
  loadFirebaseData,
  loadLocalStorageData,
  loginUser,
  requestLogin,
} from './actions';

import { flushQueuedActions } from 'redux-modules/persistence/actions';

const initiateLogin = (dispatch) => {
  firebase.auth().onAuthStateChanged(user => {
    if (user) {
      // User is signed in.
      dispatch(loginUser(user));
    } else {
      dispatch(requestLogin());
    }
  });

  firebase.auth().getRedirectResult().catch((error) => {
    document.write(error);
  });
};

const initiateRedirect = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithRedirect(provider);
};

export default store => next => action => {
  if (action.type === AUTHENTICATE_USER) {
    initiateLogin(store.dispatch);
  }

  if (action.type === LOG_IN_WITH_GOOGLE) {
    initiateRedirect();
  }

  if (action.type === LOGIN_USER) {
    if (navigator.onLine) {
      store.dispatch(loadFirebaseData());
    } else {
      store.dispatch(loadLocalStorageData());

      window.addEventListener('online', () => {
        store.dispatch(flushQueuedActions());
      });
    }
  }

  return next(action);
};

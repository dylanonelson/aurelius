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
import { persistenceWorker } from 'redux-modules/persistence/middleware';

const initiateLogin = (dispatch) => {
  const unsubscribe = firebase.auth().onAuthStateChanged(user => {
    if (user) {
      // User is signed in.
      dispatch(loginUser(user));
      unsubscribe();
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
      store.dispatch(loadLocalStorageData());
      store.dispatch(flushQueuedActions());
      persistenceWorker.schedule(() => {
        store.dispatch(loadFirebaseData());
      });
    } else {
      store.dispatch(loadLocalStorageData());

      const handleOnline = () => {
        window.removeEventListener(handleOnline);
        store.dispatch(flushQueuedActions());
        persistenceWorker.schedule(() => {
          store.dispatch(loadFirebaseData());
        });
      };

      window.addEventListener('online', handleOnline);
    }
  }

  return next(action);
};

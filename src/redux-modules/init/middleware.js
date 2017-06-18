import firebase from 'firebase';

import {
  AUTHENTICATE_USER,
  LOG_IN_WITH_GOOGLE,
  loginUser,
  requestLogin,
} from './actions';

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

  return next(action);
};

import firebase from 'firebase';

import { AUTHENTICATE_USER, loginUser } from './actions';

const initiateLogin = (dispatch) => {
  firebase.auth().onAuthStateChanged(user => {
    if (user) {
      // User is signed in.
      dispatch(loginUser(user));
    } else {
      var provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithRedirect(provider);
    }
  });

  firebase.auth().getRedirectResult().catch((error) => {
    console.error(error);
  });
};

export default store => next => action => {
  if (action.type === AUTHENTICATE_USER) {
    initiateLogin(store.dispatch);
  }

  return next(action);
};

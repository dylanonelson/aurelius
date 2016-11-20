import firebase from 'firebase';
import app from './app';

const promise = () => (new Promise((resolve, reject) => {
  app.auth().onAuthStateChanged(user => {
    if (user) {
      // User is signed in.
      resolve(user);
    } else {
      var provider = new firebase.auth.GoogleAuthProvider();
      app.auth().signInWithRedirect(provider);
    }
  });

  app.auth().getRedirectResult().catch((error) => {
    reject(error);
  });
}));

export default promise;

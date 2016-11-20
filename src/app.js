import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyDm5psHahtx6REYgjeMzZHZbMKB-9uCUQU",
  authDomain: "aurelius-22031.firebaseapp.com",
  databaseURL: "https://aurelius-22031.firebaseio.com",
  storageBucket: "aurelius-22031.appspot.com",
  messagingSenderId: "592727863587"
};

const app = firebase.initializeApp(config);

export default app;

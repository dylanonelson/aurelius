import Firebase from 'firebase';
import moment from 'moment';

const getDateString = () => (moment().subtract(4, 'hours').format('YYYY-MM-DD'));

const getUserUID = () => (Firebase.auth().currentUser.uid);

const getThoughtRef = () => (Firebase.database().ref(`/thoughts/${getUserUID()}/${getDateString()}`));

const writeThought = (type) => {
  const date = getDateString();
  const newThoughtKey = getThoughtRef().push().key;
  const ts = Date.now();
  const user = Firebase.auth().currentUser.uid

  getThoughtRef().update({
    [newThoughtKey]: {
      date,
      ts,
      type,
      user,
    },
  });
};

const readThoughts = () => (new Promise((resolve) => {
  getThoughtRef()
    .once('value')
    .then(snapshot => {
      resolve(snapshot.val());
    }).catch(() => {
      resolve(null);
    });
}));

export default {
  getDateString,
  readThoughts,
  writeThought,
};

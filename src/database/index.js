import Firebase from 'firebase';

const getDateString = () => (new Date().toISOString().slice(0, 10));

const getUserUID = () => (Firebase.auth().currentUser.uid);

const getThoughtRef = () => (Firebase.database().ref(`/thoughts/${getUserUID()}`));

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
  getThoughtRef().once('value').then(snapshot => {
    resolve(snapshot.val());
  }).catch(() => {
    resolve(null);
  });
}));

export default {
  writeThought,
  readThoughts,
};

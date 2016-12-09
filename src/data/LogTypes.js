import Firebase from 'firebase';

const userUID = () => Firebase.auth().currentUser.uid

const ref = () => Firebase.database().ref(`log_types/${userUID()}/`);

const write = (data) => (
  new Promise(resolve => {
    const key = ref().push().key;
    const ts = Date.now();
    const { name, mark } = data;

    const newType = {
      [key]: {
        ts,
        name,
        mark,
      }
    };

    ref().update(newType);
    resolve(newType);
  })
);

const read = () => (
  new Promise(resolve => {
    ref()
      .once('value')
      .then(snapshot => resolve(snapshot.val() || {}))
      .catch(() => resolve(null));
  })
);

export default {
  write,
  read
}

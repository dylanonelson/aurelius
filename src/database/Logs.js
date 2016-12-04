import Firebase from 'firebase';
import moment from 'moment';

const userUID = () => Firebase.auth().currentUser.uid

const dateString = () => moment().subtract(4, 'hours').format('YYYY-MM-DD');

const ref = date => Firebase.database().ref(`logs/${userUID()}/${date || dateString()}`);

const write = log_type =>
  new Promise(resolve => {
    const date = dateString();
    const key = ref().push().key;
    const ts = Date.now();

    const newLog = {
      [key]: {
        date,
        ts,
        log_type,
      }
    };

    ref().update(newLog);
    resolve(newLog);
  })

const read = date =>
  new Promise(resolve => {
    ref(date)
      .once('value')
      .then(snapshot => resolve(snapshot.val() || {}))
      .catch(() => resolve(null));
  })

export default {
  write,
  read
}

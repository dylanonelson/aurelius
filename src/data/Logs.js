import Firebase from 'firebase';
import moment from 'moment';

const userUID = () => Firebase.auth().currentUser.uid

const dateString = () => moment().subtract(4, 'hours').format('YYYY-MM-DD');

const ref = date =>
  Firebase.database().ref(`logs/${userUID()}/${date || dateString()}`);

const write = data =>
  new Promise(resolve => {
    const date = dateString();
    const key = ref().push().key;
    const ts = Date.now();

    const newLog = {
      [key]: {
        date,
        ts,
        log_type: data.log_type,
      }
    };

    ref().update(newLog);
    resolve(newLog);
  })

const listen = (callback) =>
  ref().on('value', (snapshot) => callback(snapshot.val()))

export default {
  write,
  listen,
}

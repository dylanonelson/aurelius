import Firebase from 'firebase';
import Moment from 'moment';
import store from '../redux-store';
import { createEnum, defineConstant } from 'enumfactory';

const getUserUID = () => (Firebase.auth().currentUser.uid);

class DataType {
  // The key paramater matches both the path segment in the Firebase
  // db and the property in the local state.
  constructor({ key, refs }) {
    this.key = key;
    if (refs) {
      Object.defineProperty(this, 'refs', { get: refs });
    }
  }

  get path() {
    return `${this.key}/${getUserUID()}`;
  }

  get refs() {
    const read = Firebase.database().ref(this.path);
    const write = read;
    return { read, write };
  }

  read(callback) {
    this.refs.read.once(snapshot => callback(snapshot.val()));
  }

  load(callback) {
    this.refs.read.once('value', (snapshot) => callback(snapshot.val()));
  }

  sync(callback) {
    this.refs.read.on('value', (snapshot) => callback(snapshot.val()));
  }

  onChildAdded(callback) {
    this.refs.read
      .limitToLast(1)
      .on('child_added', data => callback(data.key, data.val()));
  }

  onChildRemoved(callback) {
    this.refs.read
      .on('child_removed', data => callback(data.key, data.val()));
  }

  write(data) {
    const key = this.refs.write.push().key;
    const ts = Date.now();
    const d = { [key]: Object.assign({}, data, { ts }) };
    this.refs.write.update(d);
    return d;
  }

  update(id, data) {
    const ts = Date.now();
    const d = Object.assign({}, data, { ts });
    this.refs.write.child(id).update(d);
  }

  delete(id) {
    this.refs.write.child(id).set(null);
  }
}

const getByCurrentDateObj = function () {
  const date = Number(
    store.getState().currentDate.milliseconds
  );

  const write = Firebase.database().ref(this.path);

  const currentDateString = Moment(date)
    .format('YYYY-MM-DD');

  const beginningOfWeekString = Moment(date)
    // ISO week starts on Monday
    .startOf('isoWeek')
    .format('YYYY-MM-DD');

  const read = write.orderByChild('date')
    .startAt(beginningOfWeekString)
    .endAt(currentDateString);

  return { read, write };
};

const data = createEnum(
  defineConstant('ALL_LOGS', { key: 'logs' }),
  defineConstant('BENCHMARK_TYPES', { key: 'benchmarkTypes' }),
  defineConstant('CURRENT_BENCHMARKS', { key: 'benchmarks', refs: getByCurrentDateObj }),
  defineConstant('CURRENT_LOGS', { key: 'logs', refs: getByCurrentDateObj }),
  defineConstant('LOG_TYPES', { key: 'logTypes' }),
)(DataType);

export default data;

window.data = data;

import Firebase from 'firebase';
import Moment from 'moment';
import state from '../state';

const getUserUID = () => (Firebase.auth().currentUser.uid);

class DataType {
  // The key paramater matches both the path segment in the Firebase
  // db and the property in the local state.
  constructor({ key }) {
    this.key = key;
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
    setTimeout(() => {
      const key = this.refs.write.push().key;
      const ts = Date.now();
      const d = { [key]: Object.assign({}, data, { ts }) };
      this.refs.write.update(d);
    }, 5);
  }

  update(id, data) {
    setTimeout(() => {
      const ts = Date.now();
      const d = Object.assign({}, data, { ts });
      this.refs.write.child(id).update(d);
    }, 5);
  }

  delete(id) {
    setTimeout(() => {
      this.refs.write.child(id).set(null);
    }, 5);
  }
}

const getByCurrentDateObj = {
  get: function () {
    const write = Firebase.database().ref(this.path);

    const currentDateString = Moment(state.date)
      .format('YYYY-MM-DD');

    const beginningOfWeekString = Moment(state.date)
      // ISO week starts on Monday
      .startOf('isoWeek')
      .format('YYYY-MM-DD');

    const read = write.orderByChild('date')
      .startAt(beginningOfWeekString)
      .endAt(currentDateString);

    return { read, write };
  },
};

const benchmarkDAO = new DataType({ key: 'benchmarks' });
Object.defineProperty(benchmarkDAO, 'refs', getByCurrentDateObj);

const benchmarkTypeDAO = new DataType({ key: 'benchmarkTypes' });

const logDAO = new DataType({ key: 'logs' });
Object.defineProperty(logDAO, 'refs', getByCurrentDateObj);

const logTypeDAO = new DataType({ key: 'logTypes' });

export { logDAO, logTypeDAO, benchmarkDAO, benchmarkTypeDAO };
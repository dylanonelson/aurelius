import Firebase from 'firebase';
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

  sync(callback) {
    this.refs.read.on('value', (snapshot) => callback(snapshot.val()));
  }

  write(data) {
    const key = this.refs.write.push().key;
    const ts = Date.now();
    const d = { [key]: Object.assign({}, data, { ts }) };
    this.refs.write.update(d);
    return d;
  }

  delete() {
  }
}

const getByCurrentDateObj = {
  get: function () {
    const write = Firebase.database().ref(this.path);
    const read = write.orderByChild('date').equalTo(state.date);
    return { read, write };
  }
}

const benchmarkDAO = new DataType({ key: 'benchmarks' });
Object.defineProperty(benchmarkDAO, 'refs', getByCurrentDateObj);

const benchmarkTypeDAO = new DataType({ key: 'benchmarkTypes' });

const logDAO = new DataType({ key: 'logs' });
Object.defineProperty(logDAO, 'refs', getByCurrentDateObj);

const logTypeDAO = new DataType({ key: 'logTypes' });

export { logDAO, logTypeDAO, benchmarkDAO, benchmarkTypeDAO };

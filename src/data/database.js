import Firebase from 'firebase';
import DataTypes from './DataTypes';
import store from './state';

class Database {
  write(type, data) {
    const key = this.getRef(type).push().key;
    const ts = Date.now();
    const d = { [key]: Object.assign({}, data, { ts }) };
    this.getRef(type).update(d);
    return d;
  }

  listen(type, callback) {
    let ref = null;

    switch (type) {
      case DataTypes.LOG: {
        ref = this.getRef(type).orderByChild('date').equalTo(store.date);
        break;
      }
      default: {
        ref = this.getRef(type);
      }
    }

    ref.on('value', (snapshot) => callback(snapshot.val()));
  }

  getRef(type) {
    const uid = Firebase.auth().currentUser.uid;

    switch (type) {
      case DataTypes.LOG: {
        return Firebase.database().ref(`logs/${uid}`);
      }
      case DataTypes.LOG_TYPE: {
        return Firebase.database().ref(`log_types/${uid}`);
      }
      case DataTypes.BENCHMARK: {
        return Firebase.database().ref(`benchmarks/${uid}`);
      }
      default: {
        throw new Error(`Cannot retrieve database reference for data type ${type}`);
      }
    }
  }
}

const database = new Database();

export default database;

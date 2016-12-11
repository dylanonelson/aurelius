import { asMap, observable } from 'mobx';
import DataTypes from './DataTypes';
import LogTypes from './LogTypes';
import Logs from './Logs';

class Store {

  @observable logs = asMap({});
  @observable logTypes = asMap({});

  initialize() {
    Logs.listen(logs => this.updateProp('logs', logs));
    LogTypes.listen(logTypes => this.updateProp('logTypes', logTypes));
  }

  updateProp(propName, values) {
    Object.keys(values).forEach(k => this[propName].set(k, values[k]));
  }

  add(type, data) {
    switch (type) {
      case DataTypes.LOG: {
        Logs.write(data)
          .then(log => this.updateProp('logs', log));
        break;
      }
      case DataTypes.LOG_TYPE: {
        LogTypes.write(data)
          .then(logType => this.updateProp('logTypes', logType));
        break;
      }
    }
  }

  remove() {}
}

const store = new Store();

export default store;

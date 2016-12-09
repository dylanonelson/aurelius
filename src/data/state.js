import { observable } from 'mobx';
import DataTypes from './DataTypes';
import LogTypes from './LogTypes';
import Logs from './Logs';


class Store {

  @observable logs = {};
  @observable logTypes = {};

  initialize() {
    Logs.listen(logs =>
      this.logs = Object.assign({}, this.logs, logs)
    );
    LogTypes.listen(logTypes =>
      this.logTypes = Object.assign({}, this.logTypes, logTypes)
    );
  }

  add(type, data) {
    switch (type) {
      case DataTypes.LOG: {
        Logs.write(data)
          .then(log =>
            this.logs = Object.assign({}, this.logs, log)
          );
        break;
      }
      case DataTypes.LOG_TYPE: {
        LogTypes.write(data)
          .then(logType =>
            this.logTypes = Object.assign({}, this.logTypes, logType)
          );
        break;
      }
    }
  }

  remove() {}
}

const store = new Store();

export default store;

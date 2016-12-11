import { asMap, observable } from 'mobx';
import Moment from 'moment';
import DataTypes from './DataTypes';
import db from './database';

class Store {

  @observable logs = asMap({});
  @observable logTypes = asMap({});
  @observable date = '';

  initialize() {
    this.date = this.currentDate;
    db.listen(DataTypes.LOG, logs => this.updateProp('logs', logs || {}));
    db.listen(DataTypes.LOG_TYPE, logTypes => this.updateProp('logTypes', logTypes || {}));
  }

  get currentDate() {
    return Moment().subtract(4, 'hours').format('YYYY-MM-DD');
  }

  updateProp(propName, values) {
    Object.keys(values).forEach(k => this[propName].set(k, values[k]));
  }

  add(type, data) {
    const record = db.write(type, data);

    switch (type) {
      case DataTypes.LOG: {
        this.updateProp('logs', record);
        break;
      }
      case DataTypes.LOG_TYPE: {
        this.updateProp('logTypes', record);
        break;
      }
      default: {
        throw new Error(`Cannot add record for data type ${type}`);
      }
    }
  }

  remove() {}
}

const store = new Store();

export default store;

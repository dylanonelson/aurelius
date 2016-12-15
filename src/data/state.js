import { asMap, observable } from 'mobx';
import Moment from 'moment';

class Store {

  @observable logs = asMap({});
  @observable logTypes = asMap({});
  @observable date = '';

  constructor() {
    this.date = this.currentDate;
  }

  get currentDate() {
    return Moment().subtract(4, 'hours').format('YYYY-MM-DD');
  }

  updateProp(propName, values) {
    this[propName] = asMap(Object.assign({}, values || {}));
  }
}

const store = new Store();

export default store;

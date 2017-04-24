import { asMap, observable } from 'mobx';
import Moment from 'moment';

class Store {

  @observable benchmarkTypes = asMap({});
  @observable benchmarks = asMap({});
  @observable date = '';
  @observable loading = true;
  @observable logTypes = asMap({});
  @observable logs = asMap({});

  constructor() {
    this.date = this.currentDate;
  }

  get currentDate() {
    return Moment().subtract(4, 'hours').format();
  }

  updateProp(propName, values) {
    this[propName] = asMap(Object.assign({}, values || {}));
  }
}

const store = new Store();

export default store;

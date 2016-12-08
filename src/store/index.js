import { observable } from 'mobx';

class Store {
  @observable logs = {};
  @observable logTypes = {};
}

const store = new Store();

export default store;

import { logDAO, logTypeDAO, benchmarkDAO } from './daos';

const handler = {
  get: (target, property) => {
    if (property in target) {
      return target[property]
    }

    throw new Error(`${property} is not a data type`);
  },
};


class DataTypes {
  static get CURRENT_LOGS() { return logDAO; }
  static get LOG_TYPES() { return logTypeDAO; }
  static get BENCHMARK() { return benchmarkDAO; }
}

export default new Proxy(DataTypes, handler);

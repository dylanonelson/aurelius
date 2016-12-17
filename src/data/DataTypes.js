import { logDAO, logTypeDAO, benchmarkDAO, benchmarkTypeDAO } from './daos';

const handler = {
  get: (target, property) => {
    if (property in target) {
      return target[property]
    }

    throw new Error(`${property} is not a data type`);
  },
};


class DataTypes {
  static get BENCHMARK_TYPES() { return benchmarkTypeDAO; }
  static get CURRENT_BENCHMARKS() { return benchmarkDAO; }
  static get CURRENT_LOGS() { return logDAO; }
  static get LOG_TYPES() { return logTypeDAO; }
}

export default new Proxy(DataTypes, handler);

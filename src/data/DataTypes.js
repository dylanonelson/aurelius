const handler = {
  get: (target, property) => {
    if (property in target) {
      return target[property]
    }

    throw new Error(`${property} is not a data type`);
  },
};

class DataTypes {
  static get LOG() { return 'log'; }
  static get LOG_TYPE() { return 'logType'; }
  static get BENCHMARK() { return 'benchmark'; }
}

export default new Proxy(DataTypes, handler);

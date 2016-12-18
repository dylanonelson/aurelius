import state from './state';
import data from './DataTypes';

const bindData = (data, state) => {
  data.BENCHMARK_TYPES.sync(benchmarkTypes => state.updateProp('benchmarkTypes', benchmarkTypes));
  data.CURRENT_BENCHMARKS.sync(benchmarks => state.updateProp('benchmarks', benchmarks));
  data.CURRENT_LOGS.sync(logs => state.updateProp('logs', logs));
  data.LOG_TYPES.sync(logTypes => state.updateProp('logTypes', logTypes));
}

window.state = state;
window.data = data;

export { state, data, bindData };

import state from './state';
import data from './DataTypes';

const bindData = (data, state) => {
  data.BENCHMARK_TYPES.sync(benchmarkTypes => state.updateProp('benchmarkTypes', benchmarkTypes));
  data.CURRENT_BENCHMARKS.sync(benchmarks => state.updateProp('benchmarks', benchmarks));

  let logNodesLoaded = 0;
  const totalNodesNum = 2;
  const incrementLoadedCounter = () => {
    logNodesLoaded++;
    if (logNodesLoaded === totalNodesNum)
      state.loading = false;
  };

  data.LOG_TYPES.sync(logTypes => {
    state.updateProp('logTypes', logTypes);
    incrementLoadedCounter();
  });

  // Sync log at a more granular level
  data.CURRENT_LOGS.load(logs => {
    state.updateProp('logs', logs);
    incrementLoadedCounter();
  });

  data.CURRENT_LOGS.onChildAdded((id, log) => state.logs.set(id, log));
  data.CURRENT_LOGS.onChildRemoved((id, log) => state.logs.delete(id));
};

window.state = state;
window.data = data;

export { state, data, bindData };
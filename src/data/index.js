import state from './state';
import data from './DataTypes';

const bindData = (data, state) => {
  data.CURRENT_LOGS.sync(logs => state.updateProp('logs', logs));
  data.LOG_TYPES.sync(logTypes => state.updateProp('logTypes', logTypes));
}

export { state, data, bindData };

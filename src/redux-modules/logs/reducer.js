import { handleActions } from 'redux-actions';
import { ingestLogs, incrementLogType } from './actions';

const reducerMap = {
  [ingestLogs]: (previous = {}, action) => {
     const logs = Object.keys(action.payload).reduce((memo, logId) => {
      const l = action.payload[logId];
      const { date, logType } = l;
      memo[date] = memo[date] || {};
      const o = memo[date];
      o[logType] = o[logType] ? o[logType] + 1 : 1;

      return memo;
    }, {});

    return Object.assign(
      {},
      previous === 'loading' ? {} : previous,
      logs,
    );
  },
  [incrementLogType]: (previous = {}, action) => {
    const { date, logType, amount } = action.payload;

    const result = Object.assign({}, previous);

    const dateObj = (result[date] = result[date] || {});

    dateObj[logType] = dateObj[logType]
      ? dateObj[logType] + amount
      : amount;

    if (dateObj[logType] < 0) dateObj[logType] = 0;

    return result;
  },
};

const initialState = 'loading';

export default handleActions(reducerMap, initialState);

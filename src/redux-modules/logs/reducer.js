import { handleActions } from 'redux-actions';
import { ingestLogs, incrementLogType } from './actions';

const reducerMap = {
  [ingestLogs]: (previous = {}, action) => {
    return Object.assign({}, previous, action.payload);
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

const initialState = {};

export default handleActions(reducerMap, initialState);

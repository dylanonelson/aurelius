import { handleActions } from 'redux-actions';

import { ingestLogs } from '../logs/actions';
import { ingestLogTypes } from '../logTypes/actions';

import { addLogAtKey, deleteLogAtKey } from './actions';

const reducerMap = {
  [addLogAtKey]: (previous = {}, action) => {
    const result = Object.assign({}, previous);
    result.logs = Object.assign({}, result.logs, action.payload);
    return result;
  },
  [deleteLogAtKey]: (previous = {}, action) => {
    const key = action.payload;
    const result = Object.assign({}, previous);
    result.logs = Object.assign({}, result.logs);
    if (result.logs[key]) delete result.logs[key];
    return result;
  },
  [ingestLogs]: (previous = {}, action) => {
    return Object.assign({}, previous, {
      logs: Object.assign({}, previous.logs, action.payload),
    });
  },
  [ingestLogTypes]: (previous = {}, action) => {
    return Object.assign({}, previous, {
      logTypes: Object.assign({}, previous.logTypes, action.payload),
    });
  },
};

const initialState = {};

export default handleActions(reducerMap, initialState);

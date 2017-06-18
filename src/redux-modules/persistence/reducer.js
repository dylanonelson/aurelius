import { handleActions } from 'redux-actions';

import { incrementLogType, ingestLogs } from '../logs/actions';
import { ingestLogTypes } from '../logTypes/actions';
import { loadFirebaseData } from 'redux-modules/init/actions';

import { addLogAtKey, deleteLogAtKey, flushQueuedActions } from './actions';

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
  [flushQueuedActions]: (previous = {}, action) => {
    return Object.assign({}, previous, {
      connectedToFirebase: true,
      queuedActions: [],
    });
  },
  [incrementLogType]: (previous = {}, action) => {
    if (action.meta && action.meta.saveToQueue) {
      const nextState = Object.assign({}, previous);
      nextState.queuedActions = [...(previous.queuedActions || []), action];
      return nextState;
    }

    return previous;
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
  [loadFirebaseData]: (previous = {}, action) => {
    return Object.assign({}, previous, {
      connectedToFirebase: true,
    });
  },
};

const initialState = { connectedToFirebase: false };

export default handleActions(reducerMap, initialState);

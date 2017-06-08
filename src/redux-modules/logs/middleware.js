import { LOGIN_USER } from '../init/actions';
import { data } from '../../persistence';
import { ingestLogs } from './actions';

const initializeLogs = (dispatch) => {
  data.CURRENT_LOGS.load(logs => {
    dispatch(ingestLogs(logs));
  });
};

export default store => next => action => {
  if (action.type === LOGIN_USER) {
    initializeLogs(store.dispatch);
  }

  return next(action);
};
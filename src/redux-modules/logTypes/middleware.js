import { LOGIN_USER } from '../init/actions';
import { data } from '../../persistence';
import { ingestLogTypes } from './actions';

const initializeLogTypes = (dispatch) => {
  data.LOG_TYPES.load(logTypes => {
    dispatch(ingestLogTypes(logTypes));
  });
};

export default store => next => action => {
  if (action.type === LOGIN_USER) {
    initializeLogTypes(store.dispatch);
  }

  return next(action);
};

import { LOAD_FIREBASE_DATA } from '../init/actions';
import FirebaseDAOThunk from '../../persistence';
import { ingestLogs } from './actions';

const data = FirebaseDAOThunk();

const initializeLogs = (dispatch) => {
  data.CURRENT_LOGS.load(logs => {
    dispatch(
      ingestLogs({
        logs,
        meta: { merge: false },
      })
    );
  });
};

export default store => next => action => {
  if (action.type === LOAD_FIREBASE_DATA) {
    initializeLogs(store.dispatch);
  }

  return next(action);
};

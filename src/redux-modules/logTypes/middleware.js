import { LOAD_FIREBASE_DATA } from '../init/actions';
import FirebaseDAOThunk from '../../persistence';
import { ingestLogTypes } from './actions';

const data = FirebaseDAOThunk();

const initializeLogTypes = (dispatch) => {
  data.LOG_TYPES.load(logTypes => {
    dispatch(
      ingestLogTypes({
        logTypes,
        meta: { merge: false },
      })
    );
  });
};

export default store => next => action => {
  if (action.type === LOAD_FIREBASE_DATA) {
    initializeLogTypes(store.dispatch);
  }

  return next(action);
};

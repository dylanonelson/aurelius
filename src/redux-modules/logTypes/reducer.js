import { handleActions } from 'redux-actions';
import { ingestLogTypes } from './actions';

const reducerMap = {
  [ingestLogTypes]: (previous = {}, action) => {
    if (action.meta && action.meta.merge === false)
      return action.payload;

    return Object.assign(
      {},
      previous === 'loading' ? {} : previous,
      action.payload
    );
  },
};

const initialState = 'loading';

export default handleActions(reducerMap, initialState);

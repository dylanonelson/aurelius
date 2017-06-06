import { handleActions } from 'redux-actions';
import { ingestLogTypes } from './actions';

const reducerMap = {
  [ingestLogTypes]: (previous = {}, action) => {
    return Object.assign({}, previous, action.payload);
  },
};

const initialState = {};

export default handleActions(reducerMap, initialState);

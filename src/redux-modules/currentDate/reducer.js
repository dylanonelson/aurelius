import { handleActions } from 'redux-actions';

import { formatDate } from 'utilities/time';
import { resetDate } from './actions';

const reducerMap = {
  [resetDate]: (previous = {}, action) => {
    return formatDate(action.payload);
  },
};

const initialState = formatDate(Date.now());

export default handleActions(reducerMap, initialState);

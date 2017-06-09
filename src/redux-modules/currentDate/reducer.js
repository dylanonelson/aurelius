import { handleActions } from 'redux-actions';

import { formatDate } from 'utilities/time';
import { resetDate } from './actions';

const reducerMap = {
  [resetDate]: (previous = {}, action) => {
    const date = formatDate(action.payload);
    if (date.yearmoday === previous.yearmoday) return previous;
    return date;
  },
};

const initialState = formatDate(Date.now());

export default handleActions(reducerMap, initialState);

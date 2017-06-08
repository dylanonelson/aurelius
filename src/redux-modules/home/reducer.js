import { handleActions } from 'redux-actions';

import { setSelectedDate } from './actions';
import { formatDate } from 'utilities/time';

const reducerMap = {
  [setSelectedDate]: (previous = {}, action) => {
    return Object.assign({}, previous, {
      selectedDate: formatDate(action.payload),
    });
  },
};

const initialState = {
  selectedDate: formatDate(Date.now()),
};

export default handleActions(reducerMap, initialState);

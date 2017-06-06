import Moment from 'moment';

import { handleActions } from 'redux-actions';
import { resetDate } from './actions';

const formatDate = (milliseconds) => {
  const m = Moment(milliseconds).subtract(4, 'hours');

  return {
    milliseconds: m.format('x'),
    yearmoday: m.format('YYYY-MM-DD'),
    display: m.format('MMMM D, YYYY'),
  };
};

const reducerMap = {
  [resetDate]: (previous = {}, action) => {
    return formatDate(action.payload);
  },
};

const initialState = formatDate(Date.now());

export default handleActions(reducerMap, initialState);

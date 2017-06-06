import Moment from 'moment';

import { resetDate } from './actions';

export default store => {
  setInterval(() => (
    requestAnimationFrame(() => store.dispatch(resetDate()))
  ), 1000);

  return next => action => next(action);
};

import { combineReducers } from 'redux';

import currentDate from './currentDate';
import db from './db';
import local from './local';
import user from './user';

const reducer = combineReducers({
  currentDate,
  db,
  local,
  user,
});

export default reducer;

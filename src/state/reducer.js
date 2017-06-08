import { combineReducers } from 'redux';
import reduceReducers from 'reduce-reducers';

import currentDateReducer from '../redux-modules/currentDate';
import initReducer from '../redux-modules/init';
import logsReducer from '../redux-modules/logs';
import logTypesReducer from '../redux-modules/logTypes';
import homeReducer from 'redux-modules/home';
import rootReducer from './root';

const reducer = combineReducers({
  currentDate: currentDateReducer,
  init: initReducer,
  home: homeReducer,
  logs: logsReducer,
  logTypes: logTypesReducer,
});

export default reduceReducers(rootReducer, reducer);

import { applyMiddleware, compose, createStore } from 'redux';

import reducer from './reducer';
import currentDateMiddleware from '../redux-modules/currentDate/middleware';
import initMiddleware from '../redux-modules/init/middleware';
import logsMiddleware from '../redux-modules/logs/middleware';
import logTypesMiddleware from '../redux-modules/logTypes/middleware';

const middleware = applyMiddleware(
  currentDateMiddleware,
  initMiddleware,
  logsMiddleware,
  logTypesMiddleware,
);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(middleware));

// For debugging
window.store = store;

export default store;

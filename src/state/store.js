import { applyMiddleware, createStore } from 'redux';

import reducer from './reducer';

const store = createStore(reducer);

// For debugging
window.store = store;

export default store;

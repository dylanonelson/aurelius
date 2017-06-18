import { handleActions } from 'redux-actions';

import { loadLocalStorageData } from 'redux-modules/init/actions';

const actionsMap = {
  [loadLocalStorageData]: (previous = {}, action) => {
    if (!localStorage.getItem('state')) return previous;

    const nextState = JSON.parse(localStorage.getItem('previousState'));
    nextState.init.currentUser = previous.init.currentUser;
    // Maintain the part of the state monitoring the Firebase connection
    nextState.persistence.connectedToFirebase =
      previous.persistence.connectedToFirebase;
    return nextState;
  },
};

const initialState = {};

export default handleActions(actionsMap, initialState);

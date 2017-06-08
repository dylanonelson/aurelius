import { createAction } from 'redux-actions';

const ADD_LOG_AT_KEY = 'persistence/ADD_LOG_AT_KEY';

export const addLogAtKey = createAction(ADD_LOG_AT_KEY, (id, data) => {
  return { [id]: data };
});

const DELETE_LOG_AT_KEY = 'persistence/DELETE_LOG_AT_KEY';

export const deleteLogAtKey = createAction(DELETE_LOG_AT_KEY, (id, data) => {
  return id;
});

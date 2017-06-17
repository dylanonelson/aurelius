import { handleActions } from 'redux-actions';
import { loginUser, requestLogin } from './actions';

const reducerMap = {
  [loginUser]: (previous = {}, action) => {
    return Object.assign({}, previous, {
      currentUser: action.payload.currentUser,
    });
  },
  [requestLogin]: (previous = {}, action) => {
    return Object.assign({}, previous, {
      currentUser: null,
    });
  },
};

export default handleActions(reducerMap, {});

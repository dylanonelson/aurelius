import { handleActions } from 'redux-actions';
import { loginUser } from './actions';

const reducerMap = {
  [loginUser]: (previous = {}, action) => {
    return Object.assign({}, previous, {
      currentUser: action.payload.currentUser,
    });
  },
};

export default handleActions(reducerMap, {});

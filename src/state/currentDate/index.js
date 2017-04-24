import Moment from 'moment';

const initialState = Moment().subtract(4, 'hours').format();

const currentDateReducer = (previous = initialState, action) => {
  switch (action.type) {
    default: {
      return previous;
    }
  }
};

export default currentDateReducer;

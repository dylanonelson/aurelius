import Moment from 'moment';

export const formatDate = (milliseconds) => {
  const m = Moment(milliseconds).subtract(4, 'hours');

  return {
    milliseconds: m.format('x'),
    yearmoday: m.format('YYYY-MM-DD'),
    display: m.format('MMMM D, YYYY'),
  };
};

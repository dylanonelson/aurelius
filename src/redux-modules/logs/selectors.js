import moment from 'moment';
import { createSelector } from 'reselect';

const rootSelector = state => state.logs;

const dateRangeSelectorMap = {};

const ISODate = new RegExp('^\\d{4}-\\d{2}-\\d{2}$');

export const getLogsSelectorByDateRange = ([from, to]) => {
  const throwRangeError = () => {
    throw new Error('getLogsSelectorByDateRange was called with an invalid range');
  };

  if (from > to) throwRangeError();

  if (moment(from, 'YYYY-MM-DD').isValid() === false || moment(to, 'YYYY-MM-DD').isValid() === false) {
    throwRangeError();
  }

  if (ISODate.test(from) === false || ISODate.test(to) === false) {
    throwRangeError();
  }

  const key = `${from}_${to}`;
  if (dateRangeSelectorMap[key] === undefined) {
    function retrieveByDateRange(state, from, to) { // eslint-disable-line
      return Object.keys(state).reduce((acc, key) => {
        if (key >= from && key <= to) {
          acc[key] = state[key];
        }

        return acc;
      }, {});
    }

    dateRangeSelectorMap[key] = createSelector(
      rootSelector,
      logs => retrieveByDateRange(logs, from, to),
    );
  }

  return dateRangeSelectorMap[key];
};

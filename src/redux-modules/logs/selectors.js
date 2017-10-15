import moment from 'moment';
import { createSelector } from 'reselect';

const rootSelector = state => state.logs;

const dateRangeSelectorMap = {};

const ISODate = new RegExp('^\\d{4}-\\d{2}-\\d{2}$');

const throwRangeError = () => {
  throw new Error('getLogsSelectorByDateRange was called with an invalid range');
};

export const getLogsSelectorByDateRange = ([from, to]) => {
  if (from > to) throwRangeError();

  if (moment(from, 'YYYY-MM-DD').isValid() === false || moment(to, 'YYYY-MM-DD').isValid() === false) {
    throwRangeError();
  }

  if (ISODate.test(from) === false || ISODate.test(to) === false) {
    throwRangeError();
  }

  const key = `${from}_${to}`;
  if (dateRangeSelectorMap[key] === undefined) {
    const retrieveByDateRange = (state, from, to) => {
      const m = moment(from, 'YYYY-MM-DD');
      const acc = {};
      let date = m.format('YYYY-MM-DD');

      while (date <= to) {
        acc[date] = state[date] || {};
        m.add(1, 'day');
        date = m.format('YYYY-MM-DD');
      }

      return acc;
    };

    dateRangeSelectorMap[key] = createSelector(
      rootSelector,
      logs => retrieveByDateRange(logs, from, to),
    );
  }

  return dateRangeSelectorMap[key];
};

/**
 * @param {Object} logs - Counts for each log type keyed by day
 * @param {Object} logTypes - Log types keyed by id
 * @returns {Object} Object of logTypeIds pointing to an array of the totals for each day
 */
export const aggregateDailyCounts = (logs, logTypes) => {
  const days = Object.keys(logs);
  const logTypeIds = Object.keys(logTypes);
  return logTypeIds.reduce((acc, logTypeId) => {
    const counts = [];
    acc[logTypeId] = counts;
    days.forEach((day) => {
      counts.push(logs[day][logTypeId] || 0);
    });
    return acc;
  }, {});
};

/**
 * @param {Object} dailyCounts - An object of arrays of counts, keyed by log type id
 */
export const getStatisticsFromDailyCounts = (dailyCounts) => {
  return Object.keys(dailyCounts).reduce((acc, logTypeId) => {
    const arr = dailyCounts[logTypeId];
    const sum = arr.reduce((a, b) => a + b);
    const avg = sum / arr.length;
    const nonzeroes = arr.filter(a => a !== 0).length;
    const max = arr.reduce((a, b) => (a > b ? a : b));
    acc[logTypeId] = {
      avg,
      max,
      nonzeroes,
      sum,
    };
    return acc;
  }, {});
};

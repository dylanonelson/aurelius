import moment from 'moment';

import reducer from '../src/redux-modules/logs/reducer';
import * as selectors from '../src/redux-modules/logs/selectors';

const {
  aggregateDailyCounts,
  logsByDateRangeSelector,
  getStatisticsFromDailyCounts
} = selectors;

const getSampleLogCounts = () => ({
  1: 1,
  2: 10,
  3: 100,
});

const getSampleLogs = () => ({
  logs: {
    '2017-10-10': getSampleLogCounts(),
    '2017-10-11': getSampleLogCounts(),
    '2017-10-13': getSampleLogCounts(),
  }
});

describe('logs redux module reducer', () => {
  test('is a function', () => {
    expect(typeof reducer).toBe('function');
  });
});

describe('logs redux module selectors', () => {
  test('logsByDateRangeSelector selectors includes dates within the rage provided, even if there are no logs on every date', () => {
    const state = getSampleLogs();
    const result = logsByDateRangeSelector(state.logs, ['2017-10-10', '2017-10-13']);
    const expected = getSampleLogs();
    expected.logs['2017-10-12'] = {};
    expect(result).toEqual(expected.logs);
  });

  test('logsByDateRangeSelector selectors select only dates within the rage provided', () => {
    const state = getSampleLogs();
    const result = logsByDateRangeSelector(state.logs, ['2017-10-11', '2017-10-13']);
    const expected = getSampleLogs().logs;
    delete expected['2017-10-10'];
    expected['2017-10-12'] = {};
    expect(result).toEqual(expected);
  });

  test('logsByDateRangeSelector throws an error if the date range is invalid', () => {
    const backwardsDates = ['2017-10-10', '2017-10-08'];
    expect(() => logsByDateRangeSelector(backwardsDates)).toThrow();

    const wrongFormat = ['12/01/2011', '12/02/2011'];
    expect(() => logsByDateRangeSelector(wrongFormat)).toThrow();

    const nonexistent = ['2017-10-31', '2017-10-33'];
    expect(() => logsByDateRangeSelector(nonextent)).toThrow();
  });

  test('aggregateDailyCounts aggregates the counts into an array', () => {
    const logTypes = {
      a: {},
      b: {},
      c: {},
    };

    const logs = {
      '2017-10-10': {
        a: 0,
        b: 2,
        c: 0,
      },
      '2017-10-11': {
        a: 1,
        b: 1,
        c: 0,
      }
    };

    const expected = {
      a: [0, 1],
      b: [2, 1],
      c: [0, 0],
    };

    expect(aggregateDailyCounts(logs, logTypes)).toEqual(expected);
  });

  test('getStatisticsFromDailyCounts calculates the statistics from the daily counts', () => {
    const counts = {
      a: [0, 1],
      b: [2, 1],
    };

    const expected = {
      a: {
        avg: 0.5,
        max: 1,
        nonzeroes: 1,
        sum: 1,
      },
      b: {
        avg: 1.5,
        max: 2,
        nonzeroes: 2,
        sum: 3,
      },
    };

    expect(getStatisticsFromDailyCounts(counts)).toEqual(expected);
  });
});

import moment from 'moment';

import reducer from '../src/redux-modules/logs/reducer';
import * as selectors from '../src/redux-modules/logs/selectors';

const { getLogsSelectorByDateRange } = selectors;

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
  test('getLogsSelectorByDateRange returns a function', () => {
    const result = getLogsSelectorByDateRange(['2017-10-10', '2018-10-10']);
    expect(typeof result).toBe('function');
  });

  test('getLogsSelectorByDateRange selectors select dates within the rage provided', () => {
    const state = getSampleLogs();
    const selector = getLogsSelectorByDateRange(['2017-10-10', '2017-10-13']);
    const result = selector(state);
    expect(result).toEqual(getSampleLogs().logs);
  });

  test('getLogsSelectorByDateRange selectors select only dates within the rage provided', () => {
    const state = getSampleLogs();
    const selector = getLogsSelectorByDateRange(['2017-10-11', '2017-10-13']);
    const result = selector(state);
    const expected = getSampleLogs().logs;
    delete expected['2017-10-10'];
    expect(result).toEqual(expected);
  });

  test('getLogsSelectorByDateRange throws an error if the date range is invalid', () => {
    const backwardsDates = ['2017-10-10', '2017-10-08'];
    expect(() => getLogsSelectorByDateRange(backwardsDates)).toThrow();

    const wrongFormat = ['12/01/2011', '12/02/2011'];
    expect(() => getLogsSelectorByDateRange(wrongFormat)).toThrow();

    const nonexistent = ['2017-10-31', '2017-10-33'];
    expect(() => getLogsSelectorByDateRange(nonextent)).toThrow();
  });
});

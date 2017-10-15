import * as selectors from '../src/redux-modules/logTypes/selectors';

describe('selectors', () => {
  test('logTypesSelector returns root logTypes branch', () => {
    const expected = {};

    const state = {
      logTypes: expected,
    };

    expect(selectors.logTypesSelector(state)).toBe(expected);
  });
});

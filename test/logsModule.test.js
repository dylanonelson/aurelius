import reducer from '../src/redux-modules/logs/reducer';

describe('logs redux module reducer', () => {
  test('is a function', () => {
    expect(typeof reducer).toBe('function');
  });
});

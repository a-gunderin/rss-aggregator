import testFunc from '../src/someFunc.js';

test('Simple initial test', () => {
  expect(testFunc(2)).toBe(4);
  expect(testFunc(3)).toBe(9);
  expect(testFunc(4)).toBe(16);
});

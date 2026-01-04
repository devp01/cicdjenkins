const { greet } = require('../main');

test('greet default', () => {
  expect(greet()).toBe('Hello, world!');
});

test('greet name', () => {
  expect(greet('Alice')).toBe('Hello, Alice!');
});


const { replaceWokeContent } = require('./woke');

test('Replace woke content', () => {
  expect(replaceWokeContent()).toBe(true);
});

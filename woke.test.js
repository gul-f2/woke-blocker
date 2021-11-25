const { replaceWokeContent } = require('./woke');

test('Replace woke content', () => {
  const dom = (new DOMParser()).parseFromString('<button>Cancel</button>', 'text/html');

  replaceWokeContent(dom);

  expect(dom.body.innerHTML).toEqual('<button hidden=\"\">Cancel</button>');
});


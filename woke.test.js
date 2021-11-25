const { replaceWokeContent } = require('./woke');

const tests = [
  {
    inputHTML: '<button>Cancel</button>',
    expectedHTML: '<button hidden="">Cancel</button>'
  },
  {
    inputHTML: '<button>cancel</button>',
    expectedHTML: '<button hidden="">cancel</button>'
  },
  {
    inputHTML: '<button>cancel test</button>',
    expectedHTML: '<button hidden="">cancel test</button>'
  },
  {
    inputHTML: '<button>OK</button>',
    expectedHTML: '<button>OK</button>'
  },
  {
    inputHTML: '<button>OK</button><button>cancel</button>',
    expectedHTML: '<button>OK</button><button hidden="">cancel</button>'
  },
];

tests.forEach(({ inputHTML, expectedHTML }) => {
  test(`replaceWokeContent`, () => {
    const dom = (new DOMParser()).parseFromString(inputHTML, 'text/html');

    replaceWokeContent(dom);

    expect(dom.body.innerHTML).toEqual(expectedHTML);
  });
});

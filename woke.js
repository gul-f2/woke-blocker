function replaceWokeContent(dom) {
  const buttons = dom.querySelectorAll('button');
  buttons.forEach((button) => {
    if (button.textContent.toLowerCase().includes('cancel')) {
      button.setAttribute('hidden', '');
    }
  });
}

if (typeof module !== "undefined") {
  module.exports = { replaceWokeContent };
} else {
  replaceWokeContent(document);
}

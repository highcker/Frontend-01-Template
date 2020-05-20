const EOF = Symbol("EOF"); // EOF: end of file

function data(c) {}

module.exports.parserHTML = function parserHTML(html) {
  let state = data;
  for (let c of html) {
    state = state(c);
  }

  state = state(EOF);
};

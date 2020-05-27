var css = require("css");
var ast = css.parse("body { font-size: 12px; }");
// var result = css.stringify(ast, { sourcemap: true });
var result = css.stringify(ast);

// console.log(ast);

console.log(JSON.stringify(ast.stylesheet.rules, null, "    "));

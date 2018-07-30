var inliner = require('inline-resource');

var result = inliner.inline({
    inlineAll: true,
    files: ['src/index.html'],
    output : "dist",
    img: true,
    css: true,
});

console.log(result);
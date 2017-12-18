require('babel-core/register');

// var md = require('markdown-it')();
// assumes you have markdown-it src code available
var md = require('./../markdown-it')();

var tokens = md.parse('hola michael');

var Renderer = require('./../markdown-it/lib/renderer');
token_renderer = new Renderer();
html = token_renderer.render(tokens)
console.log(html)

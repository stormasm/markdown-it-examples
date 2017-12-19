require('babel-core/register');

var fs   = require('fs');
var path = require('path');

var source = fs.readFileSync(path.join(__dirname, './sample1.md'), 'utf8')

// var md = require('markdown-it')();
// assumes you have markdown-it src code available
var md = require('./../markdown-it')();

//var tokens = md.parse('hola michael');
var tokens = md.parse(source)
//console.log(md.render(source));

var ok = { html: false,
xhtmlOut: false,
breaks: false,
langPrefix: 'language-',
linkify: false,
typographer: false,
quotes: '“”‘’',
highlight: null,
maxNesting: 100 }


var Renderer = require('./../markdown-it/lib/renderer');
token_renderer = new Renderer();
html = token_renderer.render(tokens,ok)
console.log(html)

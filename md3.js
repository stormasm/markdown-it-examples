require('babel-core/register');

var Renderer = require('./../markdown-it/lib/renderer');
// var md = require('markdown-it')();
// assumes you have markdown-it src code available
var md = require('./../markdown-it')();

var fs   = require('fs');
var path = require('path');
var source = fs.readFileSync(path.join(__dirname, './sample1.md'), 'utf8')
console.log(md.render(source));

var tokens = md.parse(source)
token_renderer = new Renderer();

var ok = { html: false,
xhtmlOut: false,
breaks: false,
langPrefix: 'language-',
linkify: false,
typographer: false,
quotes: '“”‘’',
highlight: null,
maxNesting: 100 }



html = token_renderer.render(tokens,ok)
console.log(html)

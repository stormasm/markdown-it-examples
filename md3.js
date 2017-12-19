require('babel-core/register');

var Renderer = require('./../markdown-it/lib/renderer');
var options = require('./../markdown-it/lib/presets/default');

// var md = require('markdown-it')();
// assumes you have markdown-it src code available
var md = require('./../markdown-it')();

var fs   = require('fs');
var path = require('path');
var source = fs.readFileSync(path.join(__dirname, './sample1.md'), 'utf8')
//console.log(md.render(source));

var tokens = md.parse(source)
token_renderer = new Renderer();

html = token_renderer.render(tokens,options)
console.log(html)

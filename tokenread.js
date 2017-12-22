require('babel-core/register');

var Renderer = require('./lib/renderer');
var options = require('./../markdown-it/lib/presets/default');

var fs   = require('fs');
var path = require('path');
var tokens = fs.readFileSync(path.join(__dirname, './sample1.json'), 'utf8')

tokens = JSON.parse(tokens);

token_renderer = new Renderer();
html = token_renderer.render(tokens,options)
console.log(html)

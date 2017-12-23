require('babel-core/register');

//var Renderer = require('./../markdown-it/lib/renderer');
var Renderer = require('./lib/renderer');
var options = require('./../markdown-it/lib/presets/default');
var isJSON = require('is-json');

// var md = require('markdown-it')();
// assumes you have markdown-it src code available
var md = require('./../markdown-it')();

var fs   = require('fs');
var path = require('path');
//var source = fs.readFileSync(path.join(__dirname, './sample1.md'), 'utf8')
var source = fs.readFileSync(path.join('/tmp21/markdown-it-samples', './sample3.md'), 'utf8')

var tokens = md.parse(source, {});

//resultjson = JSON.stringify(tokens, null, 2);

//



//var fs   = require('fs');
//var path = require('path');
//var tokens = fs.readFileSync(path.join(__dirname, './sample3.json'), 'utf8')

//tokens = JSON.parse(tokens);

var token_renderer = new Renderer();
var mystring = token_renderer.render(tokens,options)
var mylength = mystring.length;

var final = mystring.slice(0,mylength - 1);

var left = "["
var right = "]"
var final = left.concat(final,right)
console.log(isJSON(final));
// console.log(final)

'use strict';

require('babel-core/register');
var isJSON = require('is-json');

var Renderer = require('./lib/renderer');
var options = require('./../markdown-it/lib/presets/default');

var fs   = require('fs');
var path = require('path');
var tokens = fs.readFileSync(path.join(__dirname, './sample3.json'), 'utf8')

tokens = JSON.parse(tokens);

var token_renderer = new Renderer();
var mystring = token_renderer.render(tokens,options)
var mylength = mystring.length;
//console.log(typeof(html))

var commaIndex = mystring.lastIndexOf(",")

var my1 = mystring.slice(0,mylength - 1);
//console.log(my1);
var left = "["
var right = "]"
var final = left.concat(my1,right)
//console.log(final);

//var resultjson = JSON.stringify(final);

console.log(isJSON(final));
// console.log(resultjson)

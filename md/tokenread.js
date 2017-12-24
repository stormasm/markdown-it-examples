'use strict';

require('babel-core/register');
var isJSON = require('is-json');

var Renderer = require('./../lib/renderer');
var options = require('./../../markdown-it/lib/presets/default');

var fs   = require('fs');
var path = require('path');
var tokens = fs.readFileSync(path.join(__dirname, './../samples/sample2.json'), 'utf8')

tokens = JSON.parse(tokens);

var token_renderer = new Renderer();
var mystring = token_renderer.render(tokens,options)
var mylength = mystring.length;

var final = mystring.slice(0,mylength - 1);

var left = "["
var right = "]"
var final = left.concat(final,right)
console.log(isJSON(final));
// console.log(final)

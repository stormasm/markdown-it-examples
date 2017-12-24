require('babel-core/register');

var Renderer = require('./../lib/renderer');
var options = require('./../../markdown-it/lib/presets/default');
var isJSON = require('is-json');

// var md = require('markdown-it')();
// assumes you have markdown-it src code available
var md = require('./../../markdown-it')();

var fs   = require('fs');
var path = require('path');
//var source = fs.readFileSync(path.join(__dirname, './sample1.md'), 'utf8')
var source = fs.readFileSync(path.join('/tmp21/markdown-it-samples', './sample3.md'), 'utf8')
var tokens = md.parse(source, {});

var token_renderer = new Renderer();
var mystring = token_renderer.render(tokens,options)
var mylength = mystring.length;

// get rid of the final character which is a comma
var final = mystring.slice(0,mylength - 1);

var left = "["
var right = "]"
var final = left.concat(final,right)
//console.log(isJSON(final));
// console.log(final)

repo = JSON.parse(final)

repo.forEach(function(element) {
    console.log('---');
    gh = element.href;
    // test to see if this is a github repo
    console.log(gh);
});

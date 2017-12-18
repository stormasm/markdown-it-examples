require('babel-core/register');
var isJSON = require('is-json');

var md = require('markdown-it')();
// assumes you have markdown-it src code available
// var md = require('./../markdown-it')();

var result = md.parse('hola michael');
resultjson = JSON.stringify(result, null, 2);

console.log(isJSON(resultjson));
// console.log(resultjson)

//result = md.render('_hola_')
//console.log(result);

var Renderer = require('./../markdown-it/lib/renderer');
myrenderer = new Renderer();
result = myrenderer.render(result)
console.log(result)

require('babel-core/register');
var isJSON = require('is-json');

var md = require('markdown-it')();
var result = md.parse('hola');
result = JSON.stringify(result, null, 2);

console.log(isJSON(result));
// console.log(result)

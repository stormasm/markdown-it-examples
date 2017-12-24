require('babel-core/register');

var github = require('./regex');

var t1 = "https://github.com/plouc/mozaik";
var hit = github(t1);
console.log(hit);
var t2 = "michael"
hit = github(t2)
console.log(hit);

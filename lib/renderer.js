'use strict';

// See code comments here:
// https://github.com/markdown-it/markdown-it/blob/master/lib/renderer.js

var assign          = require('./common/utils').assign;
var unescapeAll     = require('./common/utils').unescapeAll;
var escapeHtml      = require('./common/utils').escapeHtml;

var default_rules = {};

default_rules.hardbreak = function (tokens, idx, options /*, env */) {
  return options.xhtmlOut ? '<br />\n' : '<br>\n';
};
default_rules.softbreak = function (tokens, idx, options /*, env */) {
  return options.breaks ? (options.xhtmlOut ? '<br />\n' : '<br>\n') : '\n';
};

//default_rules.text = function (tokens, idx /*, options, env */) {
//  return escapeHtml(tokens[idx].content);
//};

default_rules.html_block = function (tokens, idx /*, options, env */) {
  return tokens[idx].content;
};

default_rules.html_inline = function (tokens, idx /*, options, env */) {
  return tokens[idx].content;
};

default_rules.link_open = function (tokens, idx /*, options, env */) {

  var token1 = tokens[idx];
  var token2 = tokens[idx + 1];
  var token3 = tokens[idx + 2];

  var href = token1.attrs[0][1];
  var value = token2.content

  return `{"href": "${href}", "value": "${value}"},`;

};


function Renderer() {
  this.rules = assign({}, default_rules);
}

Renderer.prototype.renderAttrs = function renderAttrs(token) {
  var i, l, result;

  if (!token.attrs) { return ''; }

  result = '';

  for (i = 0, l = token.attrs.length; i < l; i++) {
    result += ' ' + escapeHtml(token.attrs[i][0]) + '="' + escapeHtml(token.attrs[i][1]) + '"';
  }

  return result;
};

Renderer.prototype.renderInline = function (tokens, options, env) {
  var type,
      result = '',
      rules = this.rules;

  for (var i = 0, len = tokens.length; i < len; i++) {
    type = tokens[i].type;

    if (typeof rules[type] !== 'undefined') {
      result += rules[type](tokens, i, options, env, this);
    }
  }

  return result;
};

Renderer.prototype.render = function (tokens, options, env) {
  var i, len, type,
      result = '',
      rules = this.rules;

  for (i = 0, len = tokens.length; i < len; i++) {
    type = tokens[i].type;

    if (type === 'inline') {
      result += this.renderInline(tokens[i].children, options, env);
    } else if (typeof rules[type] !== 'undefined') {
      result += rules[tokens[i].type](tokens, i, options, env, this);
    }
  }

  return result;
};

module.exports = Renderer;

define(function(require){
  var $           = require('jquery');
  var _           = require('lodash');
  var domready    = require('domReady');
  var Prism       = require('prism');

  var utils = _.extend( {}, _ );

  utils.domready = domready;

  utils.dom = $;

  utils.highlighter = Prism;

  domready( Prism.highlightAll );

  return utils;
});
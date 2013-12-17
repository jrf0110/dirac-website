/**
 * Home
 */

if (typeof module === 'object' && typeof define !== 'function') {
  var define = function(factory) {
    module.exports = factory(require, exports, module);
  };
}


define(function(require){
  var utils = require('utils');

  // plugins
  require('components/navbar');
  require('components/sticky');

  var app = {
    init: function(){
      utils.domready( function(){
        utils.dom('.navbar').navbar();
        utils.dom('#docs-nav').sticky({
          stopAt: '#documentation'
        });
      });
    }
  };

  return app;
});
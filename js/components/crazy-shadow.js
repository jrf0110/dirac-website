/**
 * Crazy Shadow
 */

if (typeof module === 'object' && typeof define !== 'function') {
  var define = function(factory) {
    module.exports = factory(require, exports, module);
  };
}

define(function(require){
  'use strict';

  var $ = require('jquery');

  $.fn.crazyShadow = function( options ){
    var $this = this;

    var defaults = {
      stepSize: 6
    , numRows: 10
    , numColumns: 50
    , rowColor: 'rgba( 0, 0, 0, {alpha} )'
    , columnColor: 'rgba( 0, 0, 0, {alpha} )'
    };

    options = $.extend( {}, defaults, options );

    var tmpl = 'inset -{x}px {y}px 0 {color}';

    var i, shadow = $this.css('box-shadow');

    shadow = (shadow && shadow !== 'none') ? [shadow] : [];

    for ( i = 0; i < options.numColumns; i++ ){
      shadow.push(
        tmpl.replace( '{x}', i * options.stepSize )
            .replace( '{y}', 0 )
            .replace( '{color}', options.columnColor )
      );
    }

    for ( i = 0; i < options.numRows; i++ ){
      shadow.push(
        tmpl.replace( '{x}', 0 )
            .replace( '{y}', i * options.stepSize )
            .replace( '{color}', options.rowColor )
      );
    }

    $this.css( 'box-shadow', shadow.join(', ') );

    var plugin = {
      play: function(){

      }

    , stop: function(){

      }
    };

    return plugin;
  };
});
/**
 * Component.Sticky
 *
 * Makes an element stick to the screen
 *
 * Returns an interface to control the navbar:
 *   Methods: stick|unstick|isStuck|startListening|stopListening
 * 
 * Options:
 *   `throttle`   - How often do we execute the scroll listener
 *   `offsetY`    - Sticky offset from the top
 *   `stopAt`     - Selector to stop being sticky and stick to bottom
 */

define(function(require){
  'use strict';

  var $ = require('jquery');
  var _ = require('lodash');

  $.fn.sticky = function( options ){
    var $window = $(window);
    var $this = this;
    var $stopEl, $elParent, stopAt, stopParentOffset;

    var defaults = {
      throttle: 25
    , offsetY: 80
    };

    options = $.extend( {}, defaults, options );

    if ( options.stopAt ){
      $stopEl = $( options.stopAt );
      $elParent = $( $this[0].parentElement );
      stopAt = $stopEl.offset().top + $stopEl.height() - $this.height() - options.offsetY;
      stopParentOffset = 0 - stopAt + $elParent.offset().top - $elParent.height() - options.offsetY;
    }

    var module = {
      offsetTop: $this.offset().top - options.offsetY

    , stopAt: stopAt

    , stick: function(){
        $this.css({
          position: 'fixed'
        , top: options.offsetY + 'px'
        , bottom: ''
        });

        module._isStuck = true;

        return $this;
      }

    , unstick: function(){
        $this.css({
          position: ''
        , top: ''
        , bottom: ''
        });

        module._isStuck = false;

        return $this;
      }

    , isStuck: function(){
        return !!module._isStuck;
      }

    , stickToBottom: function(){
        $this.css({
          position: 'absolute'
        , top: ''
        , bottom: stopParentOffset + 'px'
        });

        return $this;
      }

    , startListening: function(){
        $window.scroll( module.scrollHandler );
        module.scrollHandler();
        return $this;
      }

    , stopListening: function(){
        $window.off( 'scroll', module.scrollHandler );
        return $this;
      }

    , scrollHandler: _.throttle( function(){
        var scrollTop = $window.scrollTop();
        if ( scrollTop > module.offsetTop ){
          if ( stopAt && scrollTop >= stopAt ){
            module.stickToBottom();
          } else {
            module.stick();
          }
        } else if ( module.offsetTop >= scrollTop ){
          module.unstick();
        }
      }, options.throttle )
    };

    module.startListening();

    return module;
  };
});
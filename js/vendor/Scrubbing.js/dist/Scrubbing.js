/*! Scrubbing 02-01-2014 
 * Fabrice Weinberg 
 */
!function(a,b){var c=function(a,b){return a?"string"==typeof a?b[a]:a:void 0},d=function(a,b,d,e,f){a[f]=b?c(b[f],e)||d[f]:d[f]},e=function(a,b,c,d,e){Array.isArray(a)?a.forEach(function(a){a[b](c,d,e)}):a[b](c,d,e)},f={init:function(){},start:function(a){return parseInt(a.node.textContent,10)},change:function(a,b){a.node.textContent=b},end:function(){}},g=function(a,b,c,d){this.name=a,this.prop=b,this.factor=c||1,this.divider=d||1};g.prototype={coordinate:function(a){return a[this.prop]},value:function(a,b){return this.factor*Math.floor((b-a)/this.divider)}};var h=function(a,b,c){return function(d){return new g(a,b,c,d)}},i=h("Horizontal","clientX"),j=h("Vertical","clientY",-1),k=function(){var b,c,d=function(){this.removeEventListener("mousemove",b,!1),c&&c.options.adapter.end(c)},e=function(e){if(e.target.scrubbingElement){e.preventDefault(),c=e.target.scrubbingElement;var f=c.options.adapter.start(c),g=function(a){return c.options.resolver.coordinate(a)},h=g(e);return b=function(a){if(1===a.which){var b=c.options.resolver.value(h,g(a));c.options.adapter.change(c,f+b,b)}else d()},a.addEventListener("mousemove",b,!1),a.addEventListener("mouseup",d,!1),!0}},f=function(){a.addEventListener("mousedown",e,!1),f=function(){}};return{init:function(){f()},remove:function(){}}}(),l=function(a){var b,c,d=function(){a.removeEventListener("touchmove",c,!1),b&&b.options.adapter.end(b)},e=function(d){if(1===d.targetTouches.length){var e=d.targetTouches[0];if(e.target.scrubbingElement){d.preventDefault(),b=e.target.scrubbingElement;var f=b.options.adapter.start(b),g=function(a){return b.options.resolver.coordinate(a)},h=g(e);c=function(a){if(1===a.targetTouches.length){a.preventDefault();var c=b.options.resolver.value(h,g(a.targetTouches[0]));b.options.adapter.change(b,f+c,c)}},a.addEventListener("touchmove",c,!1)}}},f=function(){a.addEventListener("touchcancel",d,!1),a.addEventListener("touchend",d,!1),f=function(){}};return{init:function(a){f(),a.node.addEventListener("touchstart",e,!1)},remove:function(){}}}(a,b),m=function(){return{init:function(a){a.node.addEventListener("mousewheel",function(b){b.preventDefault();var c=a.options.adapter.start(a);a.options.adapter.change(a,c-b.wheelDelta,b.wheelDelta)},!1)},remove:function(){}}}(a),n={driver:[l,k],resolver:i(),adapter:f},o=function(a,b){return this instanceof o?(this.node=a,this.options={},d(this.options,b,n,o.driver,"driver"),d(this.options,b,n,o.resolver,"resolver"),d(this.options,b,n,o.adapter,"adapter"),this.node.dataset.scrubOrientation=this.options.resolver.name,a.scrubbingElement=this,this.options.adapter.init(this),e(this.options.driver,"init",this),void 0):new o(b)};o.prototype={remove:function(){delete node.scrubbingElement,e(this.options.driver,"remove",this)}},o.driver={Mouse:k,MouseWheel:m,Touch:l},o.adapter={BasicNode:f},o.resolver={DefaultHorizontal:i(),DefaultVertical:j(),HorizontalProvider:i,VerticalProvider:j},a.Scrubbing=o}(window);


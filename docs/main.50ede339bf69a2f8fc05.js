!function(e){var t={};function n(i){if(t[i])return t[i].exports;var r=t[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(i,r,function(t){return e[t]}.bind(null,r));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n(1),n(2);var i=n(3),r="https://us-central1-voiceservice-217021.cloudfunctions.net",a={},o=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,23,25,34,37,40,43,65],s=function(e){return e.filter(function(e){return!o.includes(e.userId||e.id)})},u=function(e,t){return Math.round(e/t*100)},c=function(e){var t=s(e),n=new Date,i=(new Date).setDate(n.getDate()-30),r=(new Date).setDate(n.getDate()-7),o=(new Date).setDate(n.getDate()-1),c=t.filter(function(e){return new Date(e.lastArticleAddDate).getTime()>i}),l=t.filter(function(e){return new Date(e.registrationDate).getTime()<=o}),d=t.filter(function(e){return new Date(e.registrationDate).getTime()<=r}),f=t.filter(function(e){return new Date(e.registrationDate).getTime()<=i}),v=t.filter(function(e){return e.voicedArticlesCount>0}),p=t.filter(function(e){return e.voicedArticlesCount>9}),h=t.filter(function(e){return e.articlesCount>9}),_=t.filter(function(e){return e.articlesCount>0}),m=l.filter(function(e){return(new Date(e.lastArticleAddDate).getTime()-new Date(e.registrationDate).getTime())/864e5>1}),g=d.filter(function(e){return(new Date(e.lastArticleAddDate).getTime()-new Date(e.registrationDate).getTime())/864e5>7}),y=f.filter(function(e){return(new Date(e.lastArticleAddDate).getTime()-new Date(e.registrationDate).getTime())/864e5>30});a.usersAmountLabel.innerHTML=t.length,a.usersActiveLabel.innerHTML=c.length,a.users1DayLabel.innerHTML=m.length+" / "+l.length+" = "+u(m.length,l.length)+"%",a.users7DaysLabel.innerHTML=g.length+" / "+d.length+" = "+u(g.length,d.length)+"%",a.users30DaysLabel.innerHTML=y.length+" / "+f.length+" = "+u(y.length,f.length)+"%",a.usersTenVoicedLabel.innerHTML=p.length,a.usersVoicedLabel.innerHTML=v.length+" / "+_.length+" = "+u(v.length,_.length)+"% ("+v.length+" / "+t.length+" = "+u(v.length,t.length)+"%)",a.usersAddedArticlesLabel.innerHTML=_.length+" / "+t.length+" = "+u(_.length,t.length)+"%",a.usersTenArticlesLabel.innerHTML=h.length},l=function(e){var t=s(e),n=t.filter(function(e){return e.offerFirstStep>e.offerSecondStep}),i=t.filter(function(e){return e.offerSecondStep>e.offerFirstStep}),r=t.filter(function(e){return e.offerSecondStep!==e.offerFirstStep}),o=t.filter(function(e){return!!e.facebookId}),c=t.filter(function(e){return!!e.googleId});a.usersVotedLabel.innerHTML=r.length+" / "+t.length+" = "+u(r.length,t.length)+"%",a.usersPositiveLabel.innerHTML=n.length+" / "+r.length+" = "+u(n.length,r.length)+"%",a.usersNegativeLabel.innerHTML=i.length+" / "+r.length+" = "+u(i.length,r.length)+"%",a.usersFbLabel.innerHTML=o.length+" / "+t.length,a.usersGmailLabel.innerHTML=c.length+" / "+t.length},d=function(){return console.log("Sorry, request failed")},f=function(){fetch(r+"/stats").then(function(e){return e.json()}).then(c).catch(d)},v=function(){fetch(r+"/users").then(function(e){return e.json()}).then(l).catch(d)};document.addEventListener("DOMContentLoaded",function(){a={getDataButton:document.querySelector(".get-stats-data"),getUsersDataButton:document.querySelector(".get-users-data"),usersAmountLabel:document.querySelector(".users-amount"),users1DayLabel:document.querySelector(".users-retention-one-amount"),users7DaysLabel:document.querySelector(".users-retention-seven-amount"),users30DaysLabel:document.querySelector(".users-retention-thirty-amount"),usersActiveLabel:document.querySelector(".users-active-amount"),usersTenVoicedLabel:document.querySelector(".users-ten-voiced-amount"),usersTenArticlesLabel:document.querySelector(".users-ten-articles-amount"),usersVoicedLabel:document.querySelector(".users-voiced-amount"),usersAddedArticlesLabel:document.querySelector(".users-articles-amount"),usersPositiveLabel:document.querySelector(".users-positive-amount"),usersNegativeLabel:document.querySelector(".users-negative-amount"),usersVotedLabel:document.querySelector(".users-voted-amount"),usersFbLabel:document.querySelector(".users-fb-amount"),usersGmailLabel:document.querySelector(".users-gmail-amount")},new i.MDCRipple(a.getDataButton),new i.MDCRipple(a.getUsersDataButton),a.getDataButton.addEventListener("click",f),a.getUsersDataButton.addEventListener("click",v)})},function(e,t,n){},function(e,t,n){},function(e,t,n){
/*!
 Material Components for the Web
 Copyright (c) 2019 Google Inc.
 License: MIT
*/
var i;i=function(){return function(e){var t={};function n(i){if(t[i])return t[i].exports;var r=t[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:i})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=4)}([function(e,t,n){"use strict";var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}();
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var r=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.adapter_=t}return i(e,null,[{key:"cssClasses",get:function(){return{}}},{key:"strings",get:function(){return{}}},{key:"numbers",get:function(){return{}}},{key:"defaultAdapter",get:function(){return{}}}]),i(e,[{key:"init",value:function(){}},{key:"destroy",value:function(){}}]),e}();t.a=r},function(e,t,n){"use strict";var i=n(0),r=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}();
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var a=function(){function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.root_=t;for(var i=arguments.length,r=Array(i>2?i-2:0),a=2;a<i;a++)r[a-2]=arguments[a];this.initialize.apply(this,r),this.foundation_=void 0===n?this.getDefaultFoundation():n,this.foundation_.init(),this.initialSyncWithDOM()}return r(e,null,[{key:"attachTo",value:function(t){return new e(t,new i.a)}}]),r(e,[{key:"initialize",value:function(){}},{key:"getDefaultFoundation",value:function(){throw new Error("Subclasses must override getDefaultFoundation to return a properly configured foundation class")}},{key:"initialSyncWithDOM",value:function(){}},{key:"destroy",value:function(){this.foundation_.destroy()}},{key:"listen",value:function(e,t){this.root_.addEventListener(e,t)}},{key:"unlisten",value:function(e,t){this.root_.removeEventListener(e,t)}},{key:"emit",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],i=void 0;"function"==typeof CustomEvent?i=new CustomEvent(e,{detail:t,bubbles:n}):(i=document.createEvent("CustomEvent")).initCustomEvent(e,n,!1,t),this.root_.dispatchEvent(i)}}]),e}();t.a=a},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n.d(t,"supportsCssVariables",function(){return a}),n.d(t,"applyPassive",function(){return o}),n.d(t,"getMatchesProperty",function(){return s}),n.d(t,"getNormalizedEventCoords",function(){return u});
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var i=void 0,r=void 0;function a(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=i;if("boolean"==typeof i&&!t)return n;if(e.CSS&&"function"==typeof e.CSS.supports){var r=e.CSS.supports("--css-vars","yes"),a=e.CSS.supports("(--css-vars: yes)")&&e.CSS.supports("color","#00000000");return n=!(!r&&!a)&&!function(e){var t=e.document,n=t.createElement("div");n.className="mdc-ripple-surface--test-edge-var-bug",t.body.appendChild(n);var i=e.getComputedStyle(n),r=null!==i&&"solid"===i.borderTopStyle;return n.remove(),r}(e),t||(i=n),n}}function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:window,t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(void 0===r||t){var n=!1;try{e.document.addEventListener("test",null,{get passive(){return n=!0}})}catch(e){}r=n}return!!r&&{passive:!0}}function s(e){for(var t=["matches","webkitMatchesSelector","msMatchesSelector"],n="matches",i=0;i<t.length;i++){var r=t[i];if(r in e){n=r;break}}return n}function u(e,t,n){var i=t.x,r=t.y,a=i+n.left,o=r+n.top,s=void 0,u=void 0;return"touchstart"===e.type?(s=(e=e).changedTouches[0].pageX-a,u=e.changedTouches[0].pageY-o):(s=(e=e).pageX-a,u=e.pageY-o),{x:s,y:u}}},function(e,t,n){"use strict";var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}();
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
!function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}i(e,[{key:"browserSupportsCssVars",value:function(){}},{key:"isUnbounded",value:function(){}},{key:"isSurfaceActive",value:function(){}},{key:"isSurfaceDisabled",value:function(){}},{key:"addClass",value:function(e){}},{key:"removeClass",value:function(e){}},{key:"containsEventTarget",value:function(e){}},{key:"registerInteractionHandler",value:function(e,t){}},{key:"deregisterInteractionHandler",value:function(e,t){}},{key:"registerDocumentInteractionHandler",value:function(e,t){}},{key:"deregisterDocumentInteractionHandler",value:function(e,t){}},{key:"registerResizeHandler",value:function(e){}},{key:"deregisterResizeHandler",value:function(e){}},{key:"updateCssVariable",value:function(e,t){}},{key:"computeBoundingRect",value:function(){}},{key:"getWindowPageOffset",value:function(){}}])}()},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n.d(t,"MDCRipple",function(){return u}),n.d(t,"RippleCapableSurface",function(){return c});var i=n(1),r=(n(3),n(5)),a=n(2);n.d(t,"MDCRippleFoundation",function(){return r.a}),n.d(t,"util",function(){return a});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}();function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var u=function(e){function t(){var e;s(this,t);for(var n=arguments.length,i=Array(n),r=0;r<n;r++)i[r]=arguments[r];var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(i)));return a.disabled=!1,a.unbounded_,a}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i["a"]),o(t,[{key:"setUnbounded_",value:function(){this.foundation_.setUnbounded(this.unbounded_)}},{key:"activate",value:function(){this.foundation_.activate()}},{key:"deactivate",value:function(){this.foundation_.deactivate()}},{key:"layout",value:function(){this.foundation_.layout()}},{key:"getDefaultFoundation",value:function(){return new r.a(t.createAdapter(this))}},{key:"initialSyncWithDOM",value:function(){this.unbounded="mdcRippleIsUnbounded"in this.root_.dataset}},{key:"unbounded",get:function(){return this.unbounded_},set:function(e){this.unbounded_=Boolean(e),this.setUnbounded_()}}],[{key:"attachTo",value:function(e){var n=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).isUnbounded,i=void 0===n?void 0:n,r=new t(e);return void 0!==i&&(r.unbounded=i),r}},{key:"createAdapter",value:function(e){var t=a.getMatchesProperty(HTMLElement.prototype);return{browserSupportsCssVars:function(){return a.supportsCssVariables(window)},isUnbounded:function(){return e.unbounded},isSurfaceActive:function(){return e.root_[t](":active")},isSurfaceDisabled:function(){return e.disabled},addClass:function(t){return e.root_.classList.add(t)},removeClass:function(t){return e.root_.classList.remove(t)},containsEventTarget:function(t){return e.root_.contains(t)},registerInteractionHandler:function(t,n){return e.root_.addEventListener(t,n,a.applyPassive())},deregisterInteractionHandler:function(t,n){return e.root_.removeEventListener(t,n,a.applyPassive())},registerDocumentInteractionHandler:function(e,t){return document.documentElement.addEventListener(e,t,a.applyPassive())},deregisterDocumentInteractionHandler:function(e,t){return document.documentElement.removeEventListener(e,t,a.applyPassive())},registerResizeHandler:function(e){return window.addEventListener("resize",e)},deregisterResizeHandler:function(e){return window.removeEventListener("resize",e)},updateCssVariable:function(t,n){return e.root_.style.setProperty(t,n)},computeBoundingRect:function(){return e.root_.getBoundingClientRect()},getWindowPageOffset:function(){return{x:window.pageXOffset,y:window.pageYOffset}}}}}]),t}(),c=function e(){s(this,e)};c.prototype.root_,c.prototype.unbounded,c.prototype.disabled},function(e,t,n){"use strict";var i=n(0),r=(n(3),n(6)),a=n(2),o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},s=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}();
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var u=["touchstart","pointerdown","mousedown","keydown"],c=["touchend","pointerup","mouseup","contextmenu"],l=[],d=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,o(t.defaultAdapter,e)));return n.layoutFrame_=0,n.frame_={width:0,height:0},n.activationState_=n.defaultActivationState_(),n.initialSize_=0,n.maxRadius_=0,n.activateHandler_=function(e){return n.activate_(e)},n.deactivateHandler_=function(){return n.deactivate_()},n.focusHandler_=function(){return n.handleFocus()},n.blurHandler_=function(){return n.handleBlur()},n.resizeHandler_=function(){return n.layout()},n.unboundedCoords_={left:0,top:0},n.fgScale_=0,n.activationTimer_=0,n.fgDeactivationRemovalTimer_=0,n.activationAnimationHasEnded_=!1,n.activationTimerCallback_=function(){n.activationAnimationHasEnded_=!0,n.runDeactivationUXLogicIfReady_()},n.previousActivationEvent_,n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i["a"]),s(t,null,[{key:"cssClasses",get:function(){return r.a}},{key:"strings",get:function(){return r.c}},{key:"numbers",get:function(){return r.b}},{key:"defaultAdapter",get:function(){return{browserSupportsCssVars:function(){},isUnbounded:function(){},isSurfaceActive:function(){},isSurfaceDisabled:function(){},addClass:function(){},removeClass:function(){},containsEventTarget:function(){},registerInteractionHandler:function(){},deregisterInteractionHandler:function(){},registerDocumentInteractionHandler:function(){},deregisterDocumentInteractionHandler:function(){},registerResizeHandler:function(){},deregisterResizeHandler:function(){},updateCssVariable:function(){},computeBoundingRect:function(){},getWindowPageOffset:function(){}}}}]),s(t,[{key:"supportsPressRipple_",value:function(){return this.adapter_.browserSupportsCssVars()}},{key:"defaultActivationState_",value:function(){return{isActivated:!1,hasDeactivationUXRun:!1,wasActivatedByPointer:!1,wasElementMadeActive:!1,activationEvent:void 0,isProgrammatic:!1}}},{key:"init",value:function(){var e=this,n=this.supportsPressRipple_();if(this.registerRootHandlers_(n),n){var i=t.cssClasses,r=i.ROOT,a=i.UNBOUNDED;requestAnimationFrame(function(){e.adapter_.addClass(r),e.adapter_.isUnbounded()&&(e.adapter_.addClass(a),e.layoutInternal_())})}}},{key:"destroy",value:function(){var e=this;if(this.supportsPressRipple_()){this.activationTimer_&&(clearTimeout(this.activationTimer_),this.activationTimer_=0,this.adapter_.removeClass(t.cssClasses.FG_ACTIVATION)),this.fgDeactivationRemovalTimer_&&(clearTimeout(this.fgDeactivationRemovalTimer_),this.fgDeactivationRemovalTimer_=0,this.adapter_.removeClass(t.cssClasses.FG_DEACTIVATION));var n=t.cssClasses,i=n.ROOT,r=n.UNBOUNDED;requestAnimationFrame(function(){e.adapter_.removeClass(i),e.adapter_.removeClass(r),e.removeCssVars_()})}this.deregisterRootHandlers_(),this.deregisterDeactivationHandlers_()}},{key:"registerRootHandlers_",value:function(e){var t=this;e&&(u.forEach(function(e){t.adapter_.registerInteractionHandler(e,t.activateHandler_)}),this.adapter_.isUnbounded()&&this.adapter_.registerResizeHandler(this.resizeHandler_)),this.adapter_.registerInteractionHandler("focus",this.focusHandler_),this.adapter_.registerInteractionHandler("blur",this.blurHandler_)}},{key:"registerDeactivationHandlers_",value:function(e){var t=this;"keydown"===e.type?this.adapter_.registerInteractionHandler("keyup",this.deactivateHandler_):c.forEach(function(e){t.adapter_.registerDocumentInteractionHandler(e,t.deactivateHandler_)})}},{key:"deregisterRootHandlers_",value:function(){var e=this;u.forEach(function(t){e.adapter_.deregisterInteractionHandler(t,e.activateHandler_)}),this.adapter_.deregisterInteractionHandler("focus",this.focusHandler_),this.adapter_.deregisterInteractionHandler("blur",this.blurHandler_),this.adapter_.isUnbounded()&&this.adapter_.deregisterResizeHandler(this.resizeHandler_)}},{key:"deregisterDeactivationHandlers_",value:function(){var e=this;this.adapter_.deregisterInteractionHandler("keyup",this.deactivateHandler_),c.forEach(function(t){e.adapter_.deregisterDocumentInteractionHandler(t,e.deactivateHandler_)})}},{key:"removeCssVars_",value:function(){var e=this,n=t.strings;Object.keys(n).forEach(function(t){0===t.indexOf("VAR_")&&e.adapter_.updateCssVariable(n[t],null)})}},{key:"activate_",value:function(e){var t=this;if(!this.adapter_.isSurfaceDisabled()){var n=this.activationState_;if(!n.isActivated){var i=this.previousActivationEvent_;if(!(i&&void 0!==e&&i.type!==e.type))n.isActivated=!0,n.isProgrammatic=void 0===e,n.activationEvent=e,n.wasActivatedByPointer=!n.isProgrammatic&&(void 0!==e&&("mousedown"===e.type||"touchstart"===e.type||"pointerdown"===e.type)),void 0!==e&&l.length>0&&l.some(function(e){return t.adapter_.containsEventTarget(e)})?this.resetActivationState_():(void 0!==e&&(l.push(e.target),this.registerDeactivationHandlers_(e)),n.wasElementMadeActive=this.checkElementMadeActive_(e),n.wasElementMadeActive&&this.animateActivation_(),requestAnimationFrame(function(){l=[],n.wasElementMadeActive||void 0===e||" "!==e.key&&32!==e.keyCode||(n.wasElementMadeActive=t.checkElementMadeActive_(e),n.wasElementMadeActive&&t.animateActivation_()),n.wasElementMadeActive||(t.activationState_=t.defaultActivationState_())}))}}}},{key:"checkElementMadeActive_",value:function(e){return void 0===e||"keydown"!==e.type||this.adapter_.isSurfaceActive()}},{key:"activate",value:function(e){this.activate_(e)}},{key:"animateActivation_",value:function(){var e=this,n=t.strings,i=n.VAR_FG_TRANSLATE_START,r=n.VAR_FG_TRANSLATE_END,a=t.cssClasses,o=a.FG_DEACTIVATION,s=a.FG_ACTIVATION,u=t.numbers.DEACTIVATION_TIMEOUT_MS;this.layoutInternal_();var c="",l="";if(!this.adapter_.isUnbounded()){var d=this.getFgTranslationCoordinates_(),f=d.startPoint,v=d.endPoint;c=f.x+"px, "+f.y+"px",l=v.x+"px, "+v.y+"px"}this.adapter_.updateCssVariable(i,c),this.adapter_.updateCssVariable(r,l),clearTimeout(this.activationTimer_),clearTimeout(this.fgDeactivationRemovalTimer_),this.rmBoundedActivationClasses_(),this.adapter_.removeClass(o),this.adapter_.computeBoundingRect(),this.adapter_.addClass(s),this.activationTimer_=setTimeout(function(){return e.activationTimerCallback_()},u)}},{key:"getFgTranslationCoordinates_",value:function(){var e=this.activationState_,t=e.activationEvent,n=void 0;return{startPoint:n={x:(n=e.wasActivatedByPointer?Object(a.getNormalizedEventCoords)(t,this.adapter_.getWindowPageOffset(),this.adapter_.computeBoundingRect()):{x:this.frame_.width/2,y:this.frame_.height/2}).x-this.initialSize_/2,y:n.y-this.initialSize_/2},endPoint:{x:this.frame_.width/2-this.initialSize_/2,y:this.frame_.height/2-this.initialSize_/2}}}},{key:"runDeactivationUXLogicIfReady_",value:function(){var e=this,n=t.cssClasses.FG_DEACTIVATION,i=this.activationState_,a=i.hasDeactivationUXRun,o=i.isActivated;(a||!o)&&this.activationAnimationHasEnded_&&(this.rmBoundedActivationClasses_(),this.adapter_.addClass(n),this.fgDeactivationRemovalTimer_=setTimeout(function(){e.adapter_.removeClass(n)},r.b.FG_DEACTIVATION_MS))}},{key:"rmBoundedActivationClasses_",value:function(){var e=t.cssClasses.FG_ACTIVATION;this.adapter_.removeClass(e),this.activationAnimationHasEnded_=!1,this.adapter_.computeBoundingRect()}},{key:"resetActivationState_",value:function(){var e=this;this.previousActivationEvent_=this.activationState_.activationEvent,this.activationState_=this.defaultActivationState_(),setTimeout(function(){return e.previousActivationEvent_=void 0},t.numbers.TAP_DELAY_MS)}},{key:"deactivate_",value:function(){var e=this,t=this.activationState_;if(t.isActivated){var n=o({},t);t.isProgrammatic?(requestAnimationFrame(function(){return e.animateDeactivation_(n)}),this.resetActivationState_()):(this.deregisterDeactivationHandlers_(),requestAnimationFrame(function(){e.activationState_.hasDeactivationUXRun=!0,e.animateDeactivation_(n),e.resetActivationState_()}))}}},{key:"deactivate",value:function(){this.deactivate_()}},{key:"animateDeactivation_",value:function(e){var t=e.wasActivatedByPointer,n=e.wasElementMadeActive;(t||n)&&this.runDeactivationUXLogicIfReady_()}},{key:"layout",value:function(){var e=this;this.layoutFrame_&&cancelAnimationFrame(this.layoutFrame_),this.layoutFrame_=requestAnimationFrame(function(){e.layoutInternal_(),e.layoutFrame_=0})}},{key:"layoutInternal_",value:function(){var e=this;this.frame_=this.adapter_.computeBoundingRect();var n=Math.max(this.frame_.height,this.frame_.width);this.maxRadius_=this.adapter_.isUnbounded()?n:Math.sqrt(Math.pow(e.frame_.width,2)+Math.pow(e.frame_.height,2))+t.numbers.PADDING,this.initialSize_=Math.floor(n*t.numbers.INITIAL_ORIGIN_SCALE),this.fgScale_=this.maxRadius_/this.initialSize_,this.updateLayoutCssVars_()}},{key:"updateLayoutCssVars_",value:function(){var e=t.strings,n=e.VAR_FG_SIZE,i=e.VAR_LEFT,r=e.VAR_TOP,a=e.VAR_FG_SCALE;this.adapter_.updateCssVariable(n,this.initialSize_+"px"),this.adapter_.updateCssVariable(a,this.fgScale_),this.adapter_.isUnbounded()&&(this.unboundedCoords_={left:Math.round(this.frame_.width/2-this.initialSize_/2),top:Math.round(this.frame_.height/2-this.initialSize_/2)},this.adapter_.updateCssVariable(i,this.unboundedCoords_.left+"px"),this.adapter_.updateCssVariable(r,this.unboundedCoords_.top+"px"))}},{key:"setUnbounded",value:function(e){var n=t.cssClasses.UNBOUNDED;e?this.adapter_.addClass(n):this.adapter_.removeClass(n)}},{key:"handleFocus",value:function(){var e=this;requestAnimationFrame(function(){return e.adapter_.addClass(t.cssClasses.BG_FOCUSED)})}},{key:"handleBlur",value:function(){var e=this;requestAnimationFrame(function(){return e.adapter_.removeClass(t.cssClasses.BG_FOCUSED)})}}]),t}();t.a=d},function(e,t,n){"use strict";n.d(t,"a",function(){return i}),n.d(t,"c",function(){return r}),n.d(t,"b",function(){return a});
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var i={ROOT:"mdc-ripple-upgraded",UNBOUNDED:"mdc-ripple-upgraded--unbounded",BG_FOCUSED:"mdc-ripple-upgraded--background-focused",FG_ACTIVATION:"mdc-ripple-upgraded--foreground-activation",FG_DEACTIVATION:"mdc-ripple-upgraded--foreground-deactivation"},r={VAR_LEFT:"--mdc-ripple-left",VAR_TOP:"--mdc-ripple-top",VAR_FG_SIZE:"--mdc-ripple-fg-size",VAR_FG_SCALE:"--mdc-ripple-fg-scale",VAR_FG_TRANSLATE_START:"--mdc-ripple-fg-translate-start",VAR_FG_TRANSLATE_END:"--mdc-ripple-fg-translate-end"},a={PADDING:10,INITIAL_ORIGIN_SCALE:.6,DEACTIVATION_TIMEOUT_MS:225,FG_DEACTIVATION_MS:150,TAP_DELAY_MS:300}}])},e.exports=i()}]);
//# sourceMappingURL=main.50ede339bf69a2f8fc05.js.map
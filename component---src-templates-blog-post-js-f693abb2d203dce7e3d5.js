(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{I5cv:function(t,e,n){var r=n("XKFU"),o=n("Kuth"),i=n("2OiF"),a=n("y3w9"),l=n("0/R4"),u=n("eeVq"),c=n("8MEG"),s=(n("dyZX").Reflect||{}).construct,f=u((function(){function t(){}return!(s((function(){}),[],t)instanceof t)})),p=!u((function(){s((function(){}))}));r(r.S+r.F*(f||p),"Reflect",{construct:function(t,e){i(t),a(e);var n=arguments.length<3?t:i(arguments[2]);if(p&&!f)return s(t,e,n);if(t==n){switch(e.length){case 0:return new t;case 1:return new t(e[0]);case 2:return new t(e[0],e[1]);case 3:return new t(e[0],e[1],e[2]);case 4:return new t(e[0],e[1],e[2],e[3])}var r=[null];return r.push.apply(r,e),new(c.apply(t,r))}var u=n.prototype,m=o(l(u)?u:Object.prototype),y=Function.apply.call(t,m,e);return l(y)?y:m}})},eaZE:function(t,e,n){"use strict";function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function i(t,e,n){return e&&o(t.prototype,e),n&&o(t,n),t}function a(t,e){return!e||"object"!==r(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function l(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function u(t){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function c(t,e){return(c=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function s(t){if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(t=function(t,e){if(!t)return;if("string"==typeof t)return f(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return f(t,e)}(t))){var e=0,n=function(){};return{s:n,n:function(){return e>=t.length?{done:!0}:{done:!1,value:t[e++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,o,i=!0,a=!1;return{s:function(){r=t[Symbol.iterator]()},n:function(){var t=r.next();return i=t.done,t},e:function(t){a=!0,o=t},f:function(){try{i||null==r.return||r.return()}finally{if(a)throw o}}}}function f(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function p(t,e){var n;e.thumbnails&&(n=e.thumbnails);var r=new XMLHttpRequest;r.open("GET",n,!0),r.send(null),r.onreadystatechange=function(){4===r.readyState&&200===r.status&&(1!==r.getResponseHeader("Content-Type").indexOf("text")&&function(t,e,n){var r=function(t){var e,n=0,r=0,o=[],i=s(t.split("\n"));try{for(i.s();!(e=i.n()).done;){var a=e.value;if(/-->/.test(a)){var l=a.match(/(.*) --> (.*)/);n=m(l[1]),r=m(l[2])}else if(/jpg/.test(a)){var u=a.match(/(.*)\?xywh=(.*),(.*),(.*),(.*)/);o.push({from:n,to:r,file:u[1],x:u[2],y:u[3],w:u[4],h:u[5]})}}}catch(c){i.e(c)}finally{i.f()}return o}(e),o=r[r.length-1].to;"string"==typeof t&&(t=document.querySelector(t));""!=t.className&&(t.className+=" ");t.className+="timelens";var i=document.createElement("div");i.className="timelens-thumbnail";var a=document.createElement("div");a.className="timelens-time";var l=document.createElement("img");if(l.src=n.timeline,l.setAttribute("draggable","false"),n.position){var u=document.createElement("div");u.className="timelens-marker-border",t.appendChild(u);var c=document.createElement("div");c.className="timelens-marker",u.appendChild(c)}t.appendChild(l),t.appendChild(i),i.appendChild(a),n.seek&&(l.onclick=function(t){var e=y(t,l);n.seek(e*o)});l.onmousemove=function(t){var e,u=y(t,l),c=u*o,f=u*l.offsetWidth,p=n.thumbnails.substring(0,n.thumbnails.lastIndexOf("/")+1),m=null,d=s(r);try{for(d.s();!(e=d.n()).done;){var v=e.value;if(c>=v.from&&c<=v.to){m=v;break}}}catch(b){d.e(b)}finally{d.f()}i.style["background-image"]="url("+p+m.file+")",i.style["background-position"]=-m.x+"px "+-m.y+"px",i.style.width=m.w+"px",i.style.height=m.h+"px",i.style.marginLeft=Math.min(Math.max(0,f-i.offsetWidth/2),l.offsetWidth-i.offsetWidth)+"px",a.innerHTML=function(t){var e=Math.floor(t/60/60),n=Math.floor(t/60-60*e),r=Math.floor(t-60*n-60*e*60),o=n+":"+h(r,2);return e>0?e+":"+h(o,5):o}(c)},n.position&&setInterval((function(){u.style.marginLeft=n.position()/o*l.offsetWidth+"px"}),1)}(t,r.responseText,e))}}function m(t){var e=t.match(/(.*):(.*)\.(.*)/),n=parseInt(e[1]),r=parseInt(e[2]);return parseInt(e[3])/1e3+r+60*n}function y(t,e){return(t.offsetX?t.offsetX:t.pageX-e.offsetLeft)/e.offsetWidth}function h(t,e){return("000000000"+t).substr(-e)}n("91GP"),n("KKXr"),n("SRfc"),n("mGWK"),n("V+eJ"),n("XfO3"),n("HEwt"),n("f3/d"),n("rGqo"),n("LK8F"),n("hHhE"),n("/SS/"),n("a1Th"),n("h7Nl"),n("Btvt"),n("I5cv"),n("HAE/"),n("rE2o"),n("ioFf"),t.exports={timelens:p,createClapprPlugin:function(){if("undefined"!=typeof Clappr)return function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&c(t,e)}(r,Clappr.UICorePlugin);var e,n=(e=r,function(){var t,n=u(e);if(l()){var r=u(this).constructor;t=Reflect.construct(n,arguments,r)}else t=n.apply(this,arguments);return a(this,t)});function r(t){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,r),n.call(this,t)}return i(r,[{key:"name",get:function(){return"timelens"}}]),i(r,[{key:"bindEvents",value:function(){this.listenTo(this.core.mediaControl,Clappr.Events.MEDIACONTROL_RENDERED,this._init)}},{key:"_init",value:function(){var t=this.core.mediaControl.el.querySelector(".bar-background"),e=this;p(t,{timeline:this.core.options.timelens.timeline,thumbnails:this.core.options.timelens.thumbnails,position:function(){return e.core.containers[0].getCurrentTime()}})}}]),r}()},extendMediaElement:function(){"undefined"!=typeof MediaElementPlayer&&Object.assign(MediaElementPlayer.prototype,{buildtimelens:function(t,e,n,r){var o=r.querySelector("video"),i=o.dataset.timeline,a=o.querySelector('track[label="thumbnails"]');if(i&&a){var l=a.src;p(e.querySelector("."+this.options.classPrefix+"time-slider"),{timeline:i,thumbnails:l,position:function(){return t.currentTime}})}}})}}},mGWK:function(t,e,n){"use strict";var r=n("XKFU"),o=n("aCFj"),i=n("RYi7"),a=n("ne8i"),l=[].lastIndexOf,u=!!l&&1/[1].lastIndexOf(1,-0)<0;r(r.P+r.F*(u||!n("LyE8")(l)),"Array",{lastIndexOf:function(t){if(u)return l.apply(this,arguments)||0;var e=o(this),n=a(e.length),r=n-1;for(arguments.length>1&&(r=Math.min(r,i(arguments[1]))),r<0&&(r=n+r);r>=0;r--)if(r in e&&e[r]===t)return r||0;return-1}})},yZlL:function(t,e,n){"use strict";n.r(e);var r=n("q1tI"),o=n.n(r),i=n("Wbzz"),a=n("Bl7J"),l=n("vrFN"),u=n("eaZE");n("/mvq");var c=function(t){var e,n;function r(){return t.apply(this,arguments)||this}n=t,(e=r).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n;var i=r.prototype;return i.componentDidMount=function(){Object(u.timelens)("#timelens",{timeline:this.props.timeline,thumbnails:this.props.thumbnails})},i.render=function(){return o.a.createElement("div",{id:"timelens"})},r}(r.Component);n.d(e,"pageQuery",(function(){return s}));e.default=function(t){var e=t.data,n=t.pageContext,r=t.location,u=e.markdownRemark,s=e.site.siteMetadata.title,f=n.previous,p=n.next;return o.a.createElement(a.a,{location:r,title:s},o.a.createElement(l.a,{title:u.frontmatter.title,description:u.frontmatter.description||u.excerpt}),o.a.createElement("article",null,o.a.createElement("header",null,o.a.createElement("h1",{style:{marginBottom:0}},u.frontmatter.title),o.a.createElement("p",{style:{display:"block"}},u.frontmatter.date)),o.a.createElement(c,{timeline:"/timelens/PGMTV2000612871.mp4.timeline.jpg",thumbnails:"/timelens/thumbnails.vtt"}),o.a.createElement("section",{dangerouslySetInnerHTML:{__html:u.html}}),o.a.createElement("hr",{style:{}}),o.a.createElement("footer",null)),o.a.createElement("nav",null,o.a.createElement("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",padding:0}},o.a.createElement("li",null,f&&o.a.createElement(i.Link,{to:f.fields.slug,rel:"prev"},"← ",f.frontmatter.title)),o.a.createElement("li",null,p&&o.a.createElement(i.Link,{to:p.fields.slug,rel:"next"},p.frontmatter.title," →")))))};var s="2868899261"}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-f693abb2d203dce7e3d5.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[9,13],{473:function(t,n,e){"use strict";e.d(n,"d",(function(){return r})),e.d(n,"a",(function(){return a})),e.d(n,"j",(function(){return s})),e.d(n,"i",(function(){return u})),e.d(n,"f",(function(){return o})),e.d(n,"g",(function(){return c})),e.d(n,"h",(function(){return l})),e.d(n,"b",(function(){return f})),e.d(n,"e",(function(){return d})),e.d(n,"l",(function(){return p})),e.d(n,"m",(function(){return v})),e.d(n,"c",(function(){return h})),e.d(n,"k",(function(){return m}));e(48),e(137),e(92),e(477),e(143),e(91),e(66),e(476),e(136),e(226),e(138);var r=/#.*$/,i=/\.(md|html)$/,a=/\/$/,s=/^(https?:|mailto:|tel:)/;function u(t){return decodeURI(t).replace(r,"").replace(i,"")}function o(t){return s.test(t)}function c(t){return/^mailto:/.test(t)}function l(t){return/^tel:/.test(t)}function f(t){if(o(t))return t;var n=t.match(r),e=n?n[0]:"",i=u(t);return a.test(i)?t:i+".html"+e}function d(t,n){var e=t.hash,i=function(t){var n=t.match(r);if(n)return n[0]}(n);return(!i||e===i)&&u(t.path)===u(n)}function p(t,n,e){e&&(n=function(t,n,e){var r=t.charAt(0);if("/"===r)return t;if("?"===r||"#"===r)return n+t;var i=n.split("/");e&&i[i.length-1]||i.pop();for(var a=t.replace(/^\//,"").split("/"),s=0;s<a.length;s++){var u=a[s];".."===u?i.pop():"."!==u&&i.push(u)}""!==i[0]&&i.unshift("");return i.join("/")}(n,e));for(var r=u(n),i=0;i<t.length;i++)if(u(t[i].path)===r)return Object.assign({},t[i],{type:"page",path:f(n)});return console.error('[vuepress] No matching page found for sidebar item "'.concat(n,'"')),{}}function v(t,n,e,r){var i=e.pages,a=e.themeConfig,s=r&&a.locales&&a.locales[r]||a;if("auto"===(t.frontmatter.sidebar||s.sidebar||a.sidebar))return function(t){var n=h(t.headers||[]);return[{type:"group",collapsable:!1,title:t.title,children:n.map((function(n){return{type:"auto",title:n.title,basePath:t.path,path:t.path+"#"+n.slug,children:n.children||[]}}))}]}(t);var u=s.sidebar||a.sidebar;if(u){var o=function(t,n){if(Array.isArray(n))return{base:"/",config:n};for(var e in n)if(0===(r=t.path,/(\.html|\/)$/.test(r)?r:r+"/").indexOf(e))return{base:e,config:n[e]};var r;return{}}(n,u),c=o.base,l=o.config;return l?l.map((function(t){return function t(n,e,r,i){if("string"==typeof n)return p(e,n,r);if(Array.isArray(n))return Object.assign(p(e,n[0],r),{title:n[1]});i&&console.error("[vuepress] Nested sidebar groups are not supported. Consider using navbar + categories instead.");var a=n.children||[];return{type:"group",title:n.title,children:a.map((function(n){return t(n,e,r,!0)})),collapsable:!1!==n.collapsable}}(t,i,c)})):[]}return[]}function h(t){var n;return(t=t.map((function(t){return Object.assign({},t)}))).forEach((function(t){2===t.level?n=t:n&&(n.children||(n.children=[])).push(t)})),t.filter((function(t){return 2===t.level}))}function m(t){return Object.assign(t,{type:t.items&&t.items.length?"links":"link"})}},475:function(t,n,e){"use strict";var r=e(1),i=e(14).some,a=e(49),s=e(20),u=a("some"),o=s("some");r({target:"Array",proto:!0,forced:!u||!o},{some:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}})},476:function(t,n,e){"use strict";var r=e(140),i=e(13),a=e(6),s=e(17),u=e(141),o=e(142);r("match",1,(function(t,n,e){return[function(n){var e=s(this),r=null==n?void 0:n[t];return void 0!==r?r.call(n,e):new RegExp(n)[t](String(e))},function(t){var r=e(n,t,this);if(r.done)return r.value;var s=i(t),c=String(this);if(!s.global)return o(s,c);var l=s.unicode;s.lastIndex=0;for(var f,d=[],p=0;null!==(f=o(s,c));){var v=String(f[0]);d[p]=v,""===v&&(s.lastIndex=u(c,a(s.lastIndex),l)),p++}return 0===p?null:d}]}))},477:function(t,n,e){e(1)({target:"Array",stat:!0},{isArray:e(67)})},480:function(t,n,e){"use strict";e.r(n);e(475),e(139),e(227);var r=e(473),i={props:{item:{required:!0}},computed:{link:function(){return Object(r.b)(this.item.link)},exact:function(){var t=this;return this.$site.locales?Object.keys(this.$site.locales).some((function(n){return n===t.link})):"/"===this.link}},methods:{isExternal:r.f,isMailto:r.g,isTel:r.h}},a=e(35),s=Object(a.a)(i,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return t.isExternal(t.link)?e("a",{staticClass:"nav-link external",attrs:{href:t.link,target:t.isMailto(t.link)||t.isTel(t.link)?null:"_blank",rel:t.isMailto(t.link)||t.isTel(t.link)?null:"noopener noreferrer"}},[t._v("\n  "+t._s(t.item.text)+"\n  "),e("OutboundLink")],1):e("router-link",{staticClass:"nav-link",attrs:{to:t.link,exact:t.exact}},[t._v(t._s(t.item.text))])}),[],!1,null,null,null);n.default=s.exports},488:function(t,n,e){},502:function(t,n,e){"use strict";var r=e(488);e.n(r).a},524:function(t,n,e){"use strict";e.r(n);var r={components:{NavLink:e(480).default},computed:{data:function(){return this.$page.frontmatter},actionLink:function(){return{link:this.data.actionLink,text:this.data.actionText}}}},i=(e(502),e(35)),a=Object(i.a)(r,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"home"},[e("div",{staticClass:"hero"},[e("div",{staticStyle:{"margin-top":"50px"}},[e("Carousel")],1),t._v(" "),e("p",{staticClass:"description"},[t._v("\n      "+t._s(t.data.subDescription||t.$description||"Welcome to your VuePress site")+"\n    ")]),t._v(" "),t.data.actionText&&t.data.actionLink?e("p",{staticClass:"action"},[e("NavLink",{staticClass:"action-button",attrs:{item:t.actionLink}})],1):t._e()]),t._v(" "),t.data.features&&t.data.features.length?e("div",{staticClass:"features"},t._l(t.data.features,(function(n,r){return e("div",{key:r,staticClass:"feature"},[e("h2",[t._v(t._s(n.title))]),t._v(" "),e("p",[t._v(t._s(n.details))])])})),0):t._e(),t._v(" "),e("Content",{attrs:{custom:""}}),t._v(" "),t.data.footer?e("div",{staticClass:"footer"},[t._v("\n    "+t._s(t.data.footer)+"\n  ")]):t._e()],1)}),[],!1,null,null,null);n.default=a.exports}}]);
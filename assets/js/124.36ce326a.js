(window.webpackJsonp=window.webpackJsonp||[]).push([[124],{632:function(s,a,e){"use strict";e.r(a);var t=e(47),n=Object(t.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h2",{attrs:{id:"使用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用"}},[s._v("#")]),s._v(" 使用")]),s._v(" "),e("p",[s._v("第三方库，使用前先进行安装：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("$ npm install path-to-regexp\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("在 js 中使用：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("const pathToRegexp = require('path-to-regexp');\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h2",{attrs:{id:"api-介绍"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#api-介绍"}},[s._v("#")]),s._v(" API 介绍")]),s._v(" "),e("h3",{attrs:{id:"_1-pathtoregexp"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-pathtoregexp"}},[s._v("#")]),s._v(" 1.pathToRegexp()")]),s._v(" "),e("p",[s._v("作用：这里这个方法可以类比于 js 中 new RegExp('xxx')。")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("var pathToRegexp = require('path-to-regexp')\n\nvar re = pathToRegexp('/foo/:bar')\nconsole.log(re);\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("p",[s._v("打印结果如下:")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("/^\\/foo\\/((?:[^\\/]+?))(?:\\/(?=$))?$/i\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("要注意两点，一点是我们自己的 url 地址，一条是匹配规则。")]),s._v(" "),e("h3",{attrs:{id:"_2-exec"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-exec"}},[s._v("#")]),s._v(" 2.exec()")]),s._v(" "),e("p",[s._v("作用：匹配 url 地址与规则是否相符。")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("var pathToRegexp = require('path-to-regexp')\n\nvar re = pathToRegexp('/foo/:bar'); // 匹配规则\nvar match1 = re.exec('/test/route'); // url 路径\nvar match2 = re.exec('/foo/route'); // url 路径\n\nconsole.log(match1);\nconsole.log(match2);\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br")])]),e("p",[s._v("打印结果如下：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("null\n[ '/foo/route', 'route', index: 0, input: '/foo/route' ]\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("p",[s._v("说明：")]),s._v(" "),e("p",[s._v("上述代码中，第一个 url 路径与匹配规则不相符返回 null，第二个 url 路径与匹配规则相符，返回一个数组。")]),s._v(" "),e("h3",{attrs:{id:"_3-parse"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-parse"}},[s._v("#")]),s._v(" 3.parse()")]),s._v(" "),e("p",[s._v("作用：解析 url 字符串中的参数部分（:id）。")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("var pathToRegexp = require('path-to-regexp');\n\nvar url = '/user/:id';\nconsole.log(pathToRegexp.parse(url));\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("p",[s._v("打印结果如下：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("[ '/user',\n  { name: 'id',\n\n    prefix: '/',\n    delimiter: '/',\n    optional: false,\n    repeat: false,\n    partial: false,\n    pattern: '[^\\\\/]+?' } ]\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br")])]),e("p",[s._v("说明：返回一个数组，从第二个数据可以就可以得到 url 地址携带参数的属性名称（item.name）。")]),s._v(" "),e("p",[s._v("当然，url 中携带参数出了 :id 这种形式，还有 /user?id=11 这种，使用 parse() 方法解析自行查看结果。")]),s._v(" "),e("h3",{attrs:{id:"_4-compile"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-compile"}},[s._v("#")]),s._v(" 4.compile()")]),s._v(" "),e("p",[s._v("作用：快速填充 url 字符串的参数值。")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("var pathToRegexp = require('path-to-regexp')\n\nvar url = '/user/:id/:name'\nvar data = {id: 10001, name: 'bob'}\nconsole.log(pathToRegexp.compile(url)(data))\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])]),e("p",[s._v("打印结果：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("/user/10001/bob\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("从源码中该js文件对外暴露了5个方法")]),s._v(" "),e("div",{staticClass:"language-js line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[s._v("module"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" pathToRegexp\nmodule"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("parse "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" parse\nmodule"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("compile "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" compile\nmodule"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("tokensToFunction "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" tokensToFunction\nmodule"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("tokensToRegExp "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" tokensToRegExp\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])])])}),[],!1,null,null,null);a.default=n.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{511:function(s,a,t){"use strict";t.r(a);var n=t(47),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"前端标准规范-v1-0"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#前端标准规范-v1-0"}},[s._v("#")]),s._v(" 前端标准规范-v1.0")]),s._v(" "),t("p",[s._v("总体原则：极简、极快、解耦")]),s._v(" "),t("p",[s._v("主要适用范围：vue 单页项目+")]),s._v(" "),t("h2",{attrs:{id:"文件组织规范"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#文件组织规范"}},[s._v("#")]),s._v(" 文件组织规范")]),s._v(" "),t("h3",{attrs:{id:"文件结构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#文件结构"}},[s._v("#")]),s._v(" 文件结构")]),s._v(" "),t("p",[s._v("原则：文件少、层级浅、资源集中、相对独立互不影响")]),s._v(" "),t("p",[s._v("基本结构：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v(".\n|_ node_modules\n|_ dist\n|_ src\n    |_ assets // 公共资源\n        |_ img // 全局图片\n            |- favicon.png\n        |- common.js // 全局公用 js\n        |- common.less // 重置样式表 + 自定义全局样式\n        |- mixin.less // 全局 less 变量\n        |- template.html // 模板\n    |_ components // 组件\n        |_toast\n            |- index.vue\n            |- index.less\n        |- index.js // 所有组件的集合\n    |_ pages // 具体页面\n        |_ index // 首页\n            |- index.vue\n            |- index.less\n            |- good.png // 少量本页面下独自使用的图片\n        |- img // 两个以上页面都用到的图片单独抽离防止\n            |- copy.jpg\n        |_ temp // 模板\n            |- index.vue\n            |- index.less\n    |_ router // 路由\n        |- index.js\n    |_ vuex // vuex 插件\n        |- index.js\n    |- App.vue\n    |- main.js\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br")])]),s._v(" "),t("p",[s._v("说明：")]),s._v(" "),t("ol",[t("li",[t("p",[s._v("关于图片：少量直接放到本页面文件下（资源集中，互不影响），有两个页面以上公用则抽离放到 img 文件夹下（降低层级），assets 下的 img 主要放 favicon.png、pwa等全局图片（低频资源远离，不分散注意力）")])]),s._v(" "),t("li",[t("p",[s._v("assets 目录：放全局资源，此类资源辐射全局，改动频率低，集中在一起，为更好地聚焦核心")])]),s._v(" "),t("li",[t("p",[s._v("temp 文件：不用新建页面，直接复制然后改个文件名即可")])])]),s._v(" "),t("h3",{attrs:{id:"文件命名"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#文件命名"}},[s._v("#")]),s._v(" 文件命名")]),s._v(" "),t("p",[s._v("文件命名统一使用小写字母，必要的时候可以加中划线 "),t("code",[s._v("-")])]),s._v(" "),t("p",[s._v("页面文件名不宜过长，里面的文件统一以 index 为前缀，"),t("code",[s._v("index.vue、index.less")])]),s._v(" "),t("p",[s._v("父子组件命名：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("    |_ button-group // 组件组合\n    |_ button // 组件\n    |_ cell // 父组件\n    |_ cell-item // 子组件\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("h2",{attrs:{id:"js-规范"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#js-规范"}},[s._v("#")]),s._v(" JS 规范")]),s._v(" "),t("h3",{attrs:{id:"js-书写格式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#js-书写格式"}},[s._v("#")]),s._v(" JS 书写格式")]),s._v(" "),t("p",[s._v("借助 Eslint 以及编辑器的代码格式化功能确保代码格式统一")]),s._v(" "),t("p",[s._v("Eslint 使用 "),t("a",{attrs:{href:"https://github.com/standard/standard/blob/master/docs/RULES-zhcn.md",target:"_blank",rel:"noopener noreferrer"}},[s._v("JavaScript standard 代码规范"),t("OutboundLink")],1)]),s._v(" "),t("h3",{attrs:{id:"js-命名"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#js-命名"}},[s._v("#")]),s._v(" JS 命名")]),s._v(" "),t("ol",[t("li",[t("p",[s._v("全部用单引号")])]),s._v(" "),t("li",[t("p",[s._v("统一用驼峰命名法，尽量保持语义化")])]),s._v(" "),t("li",[t("p",[s._v("类名开头大写")])]),s._v(" "),t("li",[t("p",[s._v("合理使用复数、简称、缩写")])]),s._v(" "),t("li",[t("p",[s._v("多写注释，同时保持精炼")])])]),s._v(" "),t("h2",{attrs:{id:"css-规范"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#css-规范"}},[s._v("#")]),s._v(" CSS 规范")]),s._v(" "),t("p",[s._v("规则：全部用双引号，小写。每个页面的 css 命名以文件外层文件夹名字加 "),t("code",[s._v("_index")]),s._v(" 作为开头（所以说一开始文件夹名字不宜过长），统一使用下划线辅助 "),t("code",[s._v("_")])]),s._v(" "),t("p",[s._v("比如：")]),s._v(" "),t("div",{staticClass:"language-css line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-css"}},[t("code",[s._v("    "),t("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".about_index")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".tit")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("font-size")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 18px"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".nav")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("margin-bottom")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 20PX"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])]),t("p",[s._v("原因：下划线易选中复制，js 中不允许有中划线，js 操作类名夹带中划线互相混在一起，加重记忆负担，容易混淆；文件名称都是不重复的，以文件名作为此页面类名的开头可以确保不会有重复，然后此类名下的命名可与其他页面重复，依靠层级限制类名可重复使用，极大减轻样式命名的工作量")]),s._v(" "),t("h2",{attrs:{id:"html-规范"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#html-规范"}},[s._v("#")]),s._v(" HTML 规范")]),s._v(" "),t("ol",[t("li",[t("p",[s._v("增强语义化：尽量使用 h5 新标签")])]),s._v(" "),t("li",[t("p",[s._v("标签嵌套规则，防止诡异错误："),t("code",[s._v("ul、ol")]),s._v(" 下嵌套 "),t("code",[s._v("li")]),s._v("，"),t("code",[s._v("dl")]),s._v(" 下嵌套"),t("code",[s._v("dt、dd")]),s._v("，"),t("code",[s._v("p、dt、h")]),s._v("标签里面不嵌套块元素，"),t("code",[s._v("a")]),s._v(" 标签不能嵌套 "),t("code",[s._v("a")]),s._v("，行内元素不能嵌套块元素")])]),s._v(" "),t("li",[t("p",[s._v("注意 seo 优化："),t("code",[s._v("img、a、strong、em、h1-h3")])])]),s._v(" "),t("li",[t("p",[s._v("格式化标签："),t("code",[s._v("span、em、strong")]),s._v(" 格式化成无语义标签，"),t("code",[s._v("i")]),s._v(" 统一给图标使用")])]),s._v(" "),t("li",[t("p",[s._v("全部用双引号，小写")])])]),s._v(" "),t("h2",{attrs:{id:"性能优化"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#性能优化"}},[s._v("#")]),s._v(" 性能优化")]),s._v(" "),t("h3",{attrs:{id:"提交代码前检查"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#提交代码前检查"}},[s._v("#")]),s._v(" 提交代码前检查")]),s._v(" "),t("ol",[t("li",[s._v("图片")])]),s._v(" "),t("p",[s._v("必须加 favicon")]),s._v(" "),t("p",[s._v("有下载需求的图片采用 img 标签实现，无下载需求的图片采用 CSS 背景图实现")]),s._v(" "),t("p",[s._v("ps 中的切图 jpg 品质取非常高(80)，然后用 PPDuck 压图工具做无损压缩")]),s._v(" "),t("p",[s._v("尽量使用 jpg 的图，移动端大张图片不大于 50kb")]),s._v(" "),t("p",[s._v("移动端使用 2x 图")]),s._v(" "),t("p",[s._v("避免空的 src 和 href")]),s._v(" "),t("ol",{attrs:{start:"2"}},[t("li",[t("p",[s._v("a 标签 href 如果为空，统一使用 "),t("code",[s._v('"javascript:;"')]),s._v(" 而非 "),t("code",[s._v('"void(0)"')])])]),s._v(" "),t("li",[t("p",[t("code",[s._v("border-radius: 2px")]),s._v(" 值不能为单数，最小为 "),t("code",[s._v("2px")])])]),s._v(" "),t("li",[t("p",[s._v("定位元素垂直居中 "),t("code",[s._v("top")]),s._v(" 值一般写 "),t("code",[s._v("45%")]),s._v("，"),t("code",[s._v("50%")]),s._v(" 看起来会偏下")])]),s._v(" "),t("li",[t("p",[s._v("合理的鼠标光标")])]),s._v(" "),t("li",[t("p",[s._v("节流防抖")])]),s._v(" "),t("li",[t("p",[s._v("类型转换、非空判断")])]),s._v(" "),t("li",[t("p",[s._v("异步请求空白处理机制，比如加载 loading")])]),s._v(" "),t("li",[t("p",[s._v("统一的错误返回处理机制")])]),s._v(" "),t("li",[t("p",[s._v("微信分享标题敏感字，红包、钱...")])]),s._v(" "),t("li",[t("p",[s._v("app回退、跳转是否正确 "),t("code",[s._v("iOS、android")])])]),s._v(" "),t("li",[t("p",[s._v("适配需要考虑 "),t("code",[s._v("320~750 320 480 640 iphoneX")]),s._v(" 等")])]),s._v(" "),t("li",[t("p",[s._v("扩大点击区域")])])]),s._v(" "),t("h3",{attrs:{id:"优化速度"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#优化速度"}},[s._v("#")]),s._v(" 优化速度")]),s._v(" "),t("ol",[t("li",[t("p",[s._v("页面首次打开请求接口不可超过3个，过多请求需要整合")])]),s._v(" "),t("li",[t("p",[s._v("控制域名数量，每个页面请求域名一般有3个，一个主域名，一个静态资源域名，一个埋点分析域名（存在资源并行下载数限制的问题）")])]),s._v(" "),t("li",[t("p",[s._v("综合衡量 "),t("code",[s._v("css、js")]),s._v(" 的请求数量和包大小，超过 150kb 考虑做拆分")])]),s._v(" "),t("li",[t("p",[s._v("后端接口做缓存")])]),s._v(" "),t("li",[t("p",[s._v("静态资源统一部署到 CDN")])]),s._v(" "),t("li",[t("p",[s._v("开启 zip 压缩")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);
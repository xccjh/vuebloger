(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{560:function(t,a,s){"use strict";s.r(a);var r=s(35),e=Object(r.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"react概述more"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#react概述more"}},[t._v("#")]),t._v(" React概述more")]),t._v(" "),s("p",[t._v("React是facebook于2013年6月推出一个库，特点是简单和声明式（自复杂度，发展历程2013.6发布，2013.9月上涨, 2015.3月react native发布")]),t._v(" "),s("h2",{attrs:{id:"组件生命周期"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#组件生命周期"}},[t._v("#")]),t._v(" 组件生命周期")]),t._v(" "),s("p",[t._v("组件本质上是状态机，输入确定，输出一定确定")]),t._v(" "),s("h3",{attrs:{id:"分为三个部分：初始化阶段-运行中阶段-销毁阶段"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#分为三个部分：初始化阶段-运行中阶段-销毁阶段"}},[t._v("#")]),t._v(" 分为三个部分：初始化阶段——运行中阶段——销毁阶段")]),t._v(" "),s("hr"),t._v(" "),s("ul",[s("li",[t._v("初始化阶段的钩子函数：（5个钩子函数，按照顺序排列）")])]),t._v(" "),s("ol",[s("li",[t._v("getDefaultProps动dom操作）\n核心是组件，使用组件提高了代码的复用率，降低测试的难度和代码的")]),t._v(" "),s("li",[t._v("getInitialState")]),t._v(" "),s("li",[t._v("componentWillMount")]),t._v(" "),s("li",[t._v("render")]),t._v(" "),s("li",[t._v("componentDidMount")])]),t._v(" "),s("ul",[s("li",[t._v("运行中阶段：（5个钩子函数，按照顺序排列）")])]),t._v(" "),s("ol",[s("li",[t._v("componentWillReceiveProps")]),t._v(" "),s("li",[t._v("shouldComponentUpdate")]),t._v(" "),s("li",[t._v("componentWillUpdate")]),t._v(" "),s("li",[t._v("render")]),t._v(" "),s("li",[t._v("componentDidUpdate")])]),t._v(" "),s("ul",[s("li",[t._v("销毁阶段：（1个钩子函数）")])]),t._v(" "),s("ol",[s("li",[t._v("componentWillUnmount\n")])]),t._v(" "),s("h2",{attrs:{id:"定义外部默认状态"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#定义外部默认状态"}},[t._v("#")]),t._v(" 定义外部默认状态")]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("定义外部默认状态（）                      如：\n    组件名称"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("defaultProps "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("                One"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("defaultProps "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        key"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("val                                  val"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"123"')]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br")])]),s("h2",{attrs:{id:"限制外部属性的类型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#限制外部属性的类型"}},[t._v("#")]),t._v(" 限制外部属性的类型")]),t._v(" "),s("hr"),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("、下载第三方包\n            cnpm install prop"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("types "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("save"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("dev\n        "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("、引入 "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" PropTypes "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"prop-types"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("、校验\n        组件名称"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("propTypes "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("                            One"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("propTypes "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            key"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("PropTypes"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("类型                                val"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("PropTypes"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("number\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("                                                 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n还包括：\n  optionalArray"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" PropTypes"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("array"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  optionalBool"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" PropTypes"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("bool"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  optionalFunc"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" PropTypes"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("func"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  optionalNumber"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" PropTypes"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("number"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  optionalObject"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" PropTypes"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("object"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  optionalString"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" PropTypes"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("string"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  optionalSymbol"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" PropTypes"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("symbol"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br")])]),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("html中的class在react中用className，html中的for在react中用htmlFor，行内样式书写规范style={{color:'red'}}\n在className中直接可以判断什么状态用什么样式：className={2 > 1 ? 'class-a' : 'class-b'}\n在模块中直接根据条件来判断具体用哪一个组件：{window.isLoggedIn ? <Nav /> : <Login />}\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])]),s("h2",{attrs:{id:"路由库react-router"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#路由库react-router"}},[t._v("#")]),t._v(" 路由库React-Router")]),t._v(" "),s("h3",{attrs:{id:"性能优化方案"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#性能优化方案"}},[t._v("#")]),t._v(" 性能优化方案")]),t._v(" "),s("p",[t._v("1.重写shouldComponentUpdate来避免不必要的dom操作\n2.使用production版本的react.js\n3.使用key来帮助react识别列表的组件最小变化")]),t._v(" "),s("h2",{attrs:{id:"代码分割"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#代码分割"}},[t._v("#")]),t._v(" 代码分割")]),t._v(" "),s("h2",{attrs:{id:"redux使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#redux使用"}},[t._v("#")]),t._v(" redux使用")]),t._v(" "),s("h2",{attrs:{id:"redux-thunk"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#redux-thunk"}},[t._v("#")]),t._v(" redux-thunk")]),t._v(" "),s("h2",{attrs:{id:"redux-sage"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#redux-sage"}},[t._v("#")]),t._v(" redux-sage")]),t._v(" "),s("h2",{attrs:{id:"react-redux"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#react-redux"}},[t._v("#")]),t._v(" react-redux")]),t._v(" "),s("h2",{attrs:{id:"redux"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#redux"}},[t._v("#")]),t._v(" redux")]),t._v(" "),s("h2",{attrs:{id:"antd"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#antd"}},[t._v("#")]),t._v(" antd")]),t._v(" "),s("h2",{attrs:{id:"antd-mobile"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#antd-mobile"}},[t._v("#")]),t._v(" antd-mobile")]),t._v(" "),s("h2",{attrs:{id:"style-component"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#style-component"}},[t._v("#")]),t._v(" style-component")]),t._v(" "),s("p",[t._v("action\nconstant\nreducer\nstore\nactioncreater")]),t._v(" "),s("p",[t._v("mapdispatchtoprops\nmapstatetoprop")]),t._v(" "),s("p",[t._v("connect\nprovide")]),t._v(" "),s("h2",{attrs:{id:"服务端渲染"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#服务端渲染"}},[t._v("#")]),t._v(" 服务端渲染")]),t._v(" "),s("p",[t._v("store\ngetState\nsubscribe\ndispatch")])])}),[],!1,null,null,null);a.default=e.exports}}]);
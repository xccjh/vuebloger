(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{536:function(t,e,a){"use strict";a.r(e);var s=a(47),r=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"seeai教研工作台"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#seeai教研工作台"}},[t._v("#")]),t._v(" SeeAi教研工作台")]),t._v(" "),a("p",[t._v("提供给教研老师课程学科管理，课程资源管理，课包管理以及录播讲师管理，操作日志统计功能。")]),t._v(" "),a("h2",{attrs:{id:"技术栈"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#技术栈"}},[t._v("#")]),t._v(" 技术栈")]),t._v(" "),a("p",[t._v("angular9 + angular-router + typescript + webpack + ES6/7 + less + ng-zorro")]),t._v(" "),a("h2",{attrs:{id:"项目运行"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#项目运行"}},[t._v("#")]),t._v(" 项目运行")]),t._v(" "),a("ol",[a("li",[t._v("拉取代码 "),a("code",[t._v("git clone git@gitee.com:qi-course/ky-scholar-web.git")])]),t._v(" "),a("li",[t._v("安装依赖 "),a("code",[t._v("yarn")])]),t._v(" "),a("li",[t._v("运行 "),a("code",[t._v("npm start")])])]),t._v(" "),a("h2",{attrs:{id:"目录结构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#目录结构"}},[t._v("#")]),t._v(" 目录结构")]),t._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("- components-qkc/                        - 多项目共享公共组件\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("- core/                                  - 多项目共享工具如拦截器，服务，指令等等\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("- e2e/                                   - 用来端对端测试\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("- layout/                                - 基础框架页面\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("- public/                                - 本地devServer静态托管，用来多项目同域联调\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("- src                                    - 项目代码入口\n   "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("- app/                                - 主项目代码\n   "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("- assets/                             - 静态资源文件\n   "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("- environments/                       - 不同环境变量设置\n   "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("- style/                              - 样式工具mixin，变量，reset,normalize\n   "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("- main.ts                             - 入口 \n   "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("- styles.less                         - 全局样式\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("_  .env                                  - 环境变量配置相关，用来管理多项目环境变量注入问题\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("_  angular.json                          - 相当于vue.config.js\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("_  checkCommit.ts                        - 检查提交，为版本回滚做准备\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("_  fileServer.ts                         - 本地文件服务器，用来测试文件上传服务\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("_  localfile/                            - 本地文件服务器文件存储位置\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("_  fixedPointPublish.ts                  - 定点发布脚本\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("_  durationPointPublish.ts               - 定时发布脚本\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("_  proxyConfig.json                      - 代理配置\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("_  pull.ts                               - 发版前拉代码用，防止发版覆盖问题\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("_  release-prod.log                      - 发版commit日志记录用来版本回滚，日志查询\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("_  replace.ts                            - 打包替换用，用来检测服务端缓存用\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("_  server.js                             - 本地服务托管用，用来本地模拟测试和生产环境\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("_  upload-oss-prod.ts                    - 生成发版包含静态资源用\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("_  upload-oss-test.ts                    - 测试发版包含静态资源用\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("_  uploadOssTest.ts                      - 测试发版不包含静态资源用\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("_  uploadOssProd.ts                      - 生成发版不包含静态资源用 \n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br"),a("span",{staticClass:"line-number"},[t._v("21")]),a("br"),a("span",{staticClass:"line-number"},[t._v("22")]),a("br"),a("span",{staticClass:"line-number"},[t._v("23")]),a("br"),a("span",{staticClass:"line-number"},[t._v("24")]),a("br"),a("span",{staticClass:"line-number"},[t._v("25")]),a("br"),a("span",{staticClass:"line-number"},[t._v("26")]),a("br"),a("span",{staticClass:"line-number"},[t._v("27")]),a("br"),a("span",{staticClass:"line-number"},[t._v("28")]),a("br")])]),a("h2",{attrs:{id:"项目注意点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#项目注意点"}},[t._v("#")]),t._v(" 项目注意点")]),t._v(" "),a("ol",[a("li",[a("p",[a("a",{attrs:{href:"https://officeweb365.com/Help/Default/5",target:"_blank",rel:"noopener noreferrer"}},[t._v("ow365"),a("OutboundLink")],1)])]),t._v(" "),a("li",[a("p",[a("a",{attrs:{href:"https://wwo.wps.cn/docs-js-sdk/#/",target:"_blank",rel:"noopener noreferrer"}},[t._v("wps-jsSDK"),a("OutboundLink")],1)])]),t._v(" "),a("li",[a("p",[a("a",{attrs:{href:"https://tongji.baidu.com/web/welcome/login",target:"_blank",rel:"noopener noreferrer"}},[t._v("百度统计"),a("OutboundLink")],1)]),t._v(" "),a("ul",[a("li",[t._v("公共账号 gzqkc2019")]),t._v(" "),a("li",[t._v("公共密码 1qaz2WSX")])])]),t._v(" "),a("li",[a("p",[a("a",{attrs:{href:"https://dev.polyv.net/2020/videoproduct/v-player-sdk/v-player-sdk-web/v-player-sdk-web-feature/play/",target:"_blank",rel:"noopener noreferrer"}},[t._v("保利威"),a("OutboundLink")],1)]),t._v(" "),a("ul",[a("li",[t._v("公共账号 flitzjohn@dingtalk.com")]),t._v(" "),a("li",[t._v("公共密码 1qaz2wsx")])])]),t._v(" "),a("li",[a("p",[t._v("测试线：可用实训资源 （note:  账期ID不能重复录入 ，实训跳转，只有内网才能打开 ）")]),t._v(" "),a("ul",[a("li",[t._v("课程账套名称  账套编码")]),t._v(" "),a("li",[t._v("恒生塑胶  0006")]),t._v(" "),a("li",[t._v("恒图科技  0007")]),t._v(" "),a("li",[t._v("恒润物流  0008")]),t._v(" "),a("li",[t._v("恒然建筑  0009")]),t._v(" "),a("li",[t._v("恒兆物业  0010")]),t._v(" "),a("li",[t._v("铭诚塑料  0011")]),t._v(" "),a("li",[t._v("凌阳科技  0012")]),t._v(" "),a("li",[t._v("港通物流  0013")]),t._v(" "),a("li",[t._v("金桥建筑  0014")]),t._v(" "),a("li",[t._v("宝利物业  0015")]),t._v(" "),a("li",[t._v("启特地产  0016")]),t._v(" "),a("li",[t._v("恒沐大酒店  0017")]),t._v(" "),a("li",[t._v("恒远旅游  0018")]),t._v(" "),a("li",[t._v("恒陵国际  0019")]),t._v(" "),a("li",[t._v("启盟电子商务  0020")]),t._v(" "),a("li",[t._v("测试课程（三赢）  Sample")])])]),t._v(" "),a("li",[a("p",[t._v("seeai项目操作指引：")]),t._v(" "),a("ol",[a("li",[t._v("创建渠道：超级管理员账号登录「总控制台」——》创建渠道(其中渠道code需要记住，登录其他工作台需要带上)")]),t._v(" "),a("li",[t._v("创建员工账号：运营管理员账号登录「运营工作台」(地址带上渠道code)——》创建校区——》创建员工账号——》授权需要登录的工作台和角色")]),t._v(" "),a("li",[t._v("创建资源和课程：教研账号登录「教研工作台」(地址带上渠道code)——》创建学科、学科结构、资源——》创建专业、课程、课包")]),t._v(" "),a("li",[t._v("进行排课：教务账号登录「教务工作台」(地址带上渠道code)——》创建时点档案、教室档案、班型档案、学员档案——》创建排课计划——》审核通过后加入学员")]),t._v(" "),a("li",[t._v("讲师上课：讲师账号登录「讲师工作台」(地址带上渠道code)——》操作自己领悟")]),t._v(" "),a("li",[t._v("学员上课：学员账号登录「学员工作台」——》操作自己领悟")])])])]),t._v(" "),a("h2",{attrs:{id:"部署情况"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#部署情况"}},[t._v("#")]),t._v(" 部署情况")]),t._v(" "),a("ol",[a("li",[t._v("网校WEB地址")])]),t._v(" "),a("ul",[a("li",[t._v("测试地址：http://school.beta.hqjy.com/")]),t._v(" "),a("li",[t._v("正式地址：https://www.hqjy.com/")])]),t._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[t._v("seeai-测试线地址")])]),t._v(" "),a("ul",[a("li",[t._v("总控制台：http://seeai-test.beta.hqjy.com/console")]),t._v(" "),a("li",[t._v("运营工作台：http://seeai-test.beta.hqjy.com/operator/?xxx")]),t._v(" "),a("li",[t._v("教务工作台：http://seeai-test.beta.hqjy.com/officer/?xxx")]),t._v(" "),a("li",[t._v("教研工作台：http://seeai-test.beta.hqjy.com/scholar/?xxx")]),t._v(" "),a("li",[t._v("讲师工作台：http://seeai-test.beta.hqjy.com/teacher/?xxx")]),t._v(" "),a("li",[t._v("学生工作台PC：http://seeai-test.beta.hqjy.com/student/?xxx")])]),t._v(" "),a("ol",{attrs:{start:"3"}},[a("li",[t._v("seeai-正式线地址")])]),t._v(" "),a("ul",[a("li",[t._v("总控制台：https://\ufeffseeai.hqjy.com/console/")]),t._v(" "),a("li",[t._v("运营工作台：https://\ufeffseeai.hqjy.com\ufeff/operator/?xxx")]),t._v(" "),a("li",[t._v("教务工作台：https://\ufeffseeai.hqjy.com\ufeff/officer/?xxx")]),t._v(" "),a("li",[t._v("教研工作台：https://\ufeffseeai.hqjy.com\ufeff/scholar/?xxx")]),t._v(" "),a("li",[t._v("讲师工作台：https://\ufeffseeai.hqjy.com\ufeff/teacher/?xxx")]),t._v(" "),a("li",[t._v("学生工作台PC：https://\ufeffseeai.hqjy.com\ufeff/student/?xxx")])]),t._v(" "),a("ol",{attrs:{start:"4"}},[a("li",[t._v("账号规则")])]),t._v(" "),a("ul",[a("li",[t._v("总控制台：admin/qkc123456")]),t._v(" "),a("li",[t._v("运营工作台：admin/qkc123456")]),t._v(" "),a("li",[t._v("其他工作台：手机号/qkc123456")])]),t._v(" "),a("ol",{attrs:{start:"5"}},[a("li",[t._v("jenkins发布平台")])]),t._v(" "),a("ul",[a("li",[t._v("地址：http://123.57.223.188:8088/")]),t._v(" "),a("li",[t._v("账号：dev/123456")])]),t._v(" "),a("ol",{attrs:{start:"6"}},[a("li",[a("p",[t._v("99数字：http://dev.99shuzi.com/")])]),t._v(" "),a("li",[a("p",[t._v("剧本平台（具体使用细节可以咨询-张小玲）")])])]),t._v(" "),a("ul",[a("li",[t._v("管理端测试地址：admin/123456")]),t._v(" "),a("li",[t._v("http://ky.qicourse.cn/scenario/manage/#/login")]),t._v(" "),a("li",[t._v("剧本平台教师端测试地址：")]),t._v(" "),a("li",[t._v("http://ky.qicourse.cn/scenario/scholar/#/login")]),t._v(" "),a("li",[t._v("学生端和h5需基于某个剧本打开，类似：")]),t._v(" "),a("li",[t._v("http://ky.qicourse.cn/scenario/student/#/login/7a5d328fce9ef21a476141e227bff544/2fc54ce3088edc557560b2deb0f955fb/1")]),t._v(" "),a("li",[t._v("http://ky.qicourse.cn/scenario/student/#/login/剧本id/剧本版本id/剧本版本")])]),t._v(" "),a("h2",{attrs:{id:"项目优化点建议"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#项目优化点建议"}},[t._v("#")]),t._v(" 项目优化点建议")]),t._v(" "),a("ul",[a("li",[t._v("公共组件文档待补充")])]),t._v(" "),a("h2",{attrs:{id:"分支介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#分支介绍"}},[t._v("#")]),t._v(" 分支介绍")]),t._v(" "),a("ul",[a("li",[t._v("feature-12-13：1.7开发 最新分支 最后更新时间2020.01.06")]),t._v(" "),a("li",[t._v("computer_exam 功能分支 最后更新时间2019.12.03")]),t._v(" "),a("li",[t._v("dev 主分支 最后更新时间2019.12.06")]),t._v(" "),a("li",[t._v("其他都是功能分支  可删除")])]),t._v(" "),a("h2",{attrs:{id:"主要原型地址"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#主要原型地址"}},[t._v("#")]),t._v(" 主要原型地址")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://lanhuapp.com/web/#/item/project/stage?pid=13decb9b-f44d-439a-811e-df5c54f16636",target:"_blank",rel:"noopener noreferrer"}},[t._v("seeai蓝湖原型地址"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://axhub.im/ax9/5f51a1202a64b135/#g=1&id=zbdj8b&p=%E5%90%8E%E5%8F%B0%E4%B8%80%E6%9C%9F%E4%BF%AE%E8%AE%A2%E8%AE%B0%E5%BD%95",target:"_blank",rel:"noopener noreferrer"}},[t._v("题库axhub原型地址"),a("OutboundLink")],1)]),t._v(" "),a("li",[t._v("蓝湖公共账号：\n"),a("ul",[a("li",[t._v("adamluo2003@qq.com/lanhu888888（郑光勇）")]),t._v(" "),a("li",[t._v("1085610024@qq.com/1qaz2wsx（谭宇栩、苏善泳）")]),t._v(" "),a("li",[t._v("m13435089677@163.com abcd930821（叶雷、邹家和）")]),t._v(" "),a("li",[t._v("772941190@qq.com/xi931214（马景文、隆双风）")])])])]),t._v(" "),a("h2",{attrs:{id:"swagger-ui-yapi"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#swagger-ui-yapi"}},[t._v("#")]),t._v(" swagger-ui/yapi")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"http://10.0.98.148:20210/doc.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("统计信息服务接口地址"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"http://10.0.103.2:3000/project/23/interface/api/1319",target:"_blank",rel:"noopener noreferrer"}},[t._v("教研Yapi"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"http://10.0.98.146:6001/tk/swagger-ui.html#/",target:"_blank",rel:"noopener noreferrer"}},[t._v("题库内核层接口文档V1.0"),a("OutboundLink")],1)])]),t._v(" "),a("h2",{attrs:{id:"项目团队成员"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#项目团队成员"}},[t._v("#")]),t._v(" 项目团队成员")]),t._v(" "),a("ol",[a("li",[t._v("测试：罗文峰，谢久蜜，聂艳杰")]),t._v(" "),a("li",[t._v("产品：何烨，罗展雄")]),t._v(" "),a("li",[t._v("后台：里扬荣，唐赞勇")]),t._v(" "),a("li",[t._v("前端：邹家和，叶雷，马景文")])]),t._v(" "),a("h3",{attrs:{id:"前端各板块负责人"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前端各板块负责人"}},[t._v("#")]),t._v(" 前端各板块负责人")]),t._v(" "),a("ol",[a("li",[t._v("教务工作台：郑佳锚")]),t._v(" "),a("li",[t._v("教研工作台：邹家和")]),t._v(" "),a("li",[t._v("运营工作台：马景文，郑佳锚")]),t._v(" "),a("li",[t._v("讲师端：申文雯")]),t._v(" "),a("li",[t._v("学员PC端：马景文，邹家和，谭宇栩")]),t._v(" "),a("li",[t._v("学员H5端：叶雷，双风，邹家和，苏善泳")]),t._v(" "),a("li",[t._v("剧本平台：张小玲，郑光勇")])])])}),[],!1,null,null,null);e.default=r.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{540:function(s,a,t){"use strict";t.r(a);var e=t(47),r=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"概述"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[s._v("#")]),s._v(" 概述")]),s._v(" "),t("p",[s._v("jps 命令类似与 linux 的 ps 命令，但是它只列出系统中所有的 Java 应用程序。 通过 jps 命令可以方便地查看 Java 进程的启动类、传入参数和 Java 虚拟机参数等信息。\n如果在 linux 中想查看 java 的进程，一般我们都需要 ps -ef | grep java 来获取进程 ID。\n如果只想获取 Java 程序的进程，可以直接使用 jps 命令来直接查看。\n")]),s._v(" "),t("h2",{attrs:{id:"jps-用法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#jps-用法"}},[s._v("#")]),s._v(" jps 用法")]),s._v(" "),t("p",[t("img",{attrs:{src:"/vuebloger/img/post/2843224-23eac6f01c1b00a1.webp",alt:"jsp",title:"jsp用法"}})]),s._v(" "),t("h2",{attrs:{id:"参数说明"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参数说明"}},[s._v("#")]),s._v(" 参数说明")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("q：只输出进程 "),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("ID")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("m：输出传入 main 方法的参数\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("l：输出完全的包名，应用主类名，jar的完全路径名\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("v：输出jvm参数\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("V")]),s._v("：输出通过flag文件传递到"),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("JVM")]),s._v("中的参数\n\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("hostid"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("：远程服务器地址，jps 支持远程调用\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("protocol"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//]hostname][:port][/servername]")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])]),t("h2",{attrs:{id:"示例一：jps"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#示例一：jps"}},[s._v("#")]),s._v(" 示例一：jps")]),s._v(" "),t("p",[s._v("jps 不带参数，默认显示 进程ID 和 启动类的名称")]),s._v(" "),t("p",[t("img",{attrs:{src:"/vuebloger/img/post/Snipaste_2020-04-13_09-17-11.png",alt:"jps",title:"jps不带参数"}})]),s._v(" "),t("h2",{attrs:{id:"示例二：jps-q-参数-q-只输出进程id，而不显示出类的名称"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#示例二：jps-q-参数-q-只输出进程id，而不显示出类的名称"}},[s._v("#")]),s._v(" 示例二：jps -q , 参数 -q 只输出进程ID，而不显示出类的名称")]),s._v(" "),t("p",[t("img",{attrs:{src:"/vuebloger/img/post/2843224-aaaea16c6387034f.webp",alt:"jps",title:"jps不带参数"}})]),s._v(" "),t("h2",{attrs:{id:"示例三：jps-m-参数-m-可以输出传递给-java-进程（main-方法）的参数。"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#示例三：jps-m-参数-m-可以输出传递给-java-进程（main-方法）的参数。"}},[s._v("#")]),s._v(" 示例三：jps -m ,参数 -m 可以输出传递给 Java 进程（main 方法）的参数。")]),s._v(" "),t("p",[t("img",{attrs:{src:"/vuebloger/img/post/2843224-ba0cbbcc47570983.webp",alt:"jps",title:"jps不带参数"}})]),s._v(" "),t("h2",{attrs:{id:"示例四：jps-l-参数-l-可以输出主函数的完整路径（类的全路径）。"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#示例四：jps-l-参数-l-可以输出主函数的完整路径（类的全路径）。"}},[s._v("#")]),s._v(" 示例四：jps -l , 参数 -l 可以输出主函数的完整路径（类的全路径）。")]),s._v(" "),t("p",[t("img",{attrs:{src:"/vuebloger/img/post/2843224-de4e04aa619288e6.webp",alt:"jps",title:"jps不带参数"}})]),s._v(" "),t("h2",{attrs:{id:"示例五：jps-v-参数-v-可以显示传递给-java-虚拟机的参数。"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#示例五：jps-v-参数-v-可以显示传递给-java-虚拟机的参数。"}},[s._v("#")]),s._v(" 示例五：jps -v , 参数 -v 可以显示传递给 Java 虚拟机的参数。")]),s._v(" "),t("p",[t("img",{attrs:{src:"/vuebloger/img/post/2843224-2dad13dfecb69051.webp",alt:"jps",title:"jps不带参数"}})]),s._v(" "),t("h2",{attrs:{id:"获取远程服务器-jps-信息"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#获取远程服务器-jps-信息"}},[s._v("#")]),s._v(" 获取远程服务器 jps 信息")]),s._v(" "),t("p",[s._v("jps 支持查看远程服务上的 jvm 进程信息。如果需要查看其他机器上的 jvm 进程，需要在待查看机器上启动 jstatd 服务。")]),s._v(" "),t("h3",{attrs:{id:"开启-jstatd-服务"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#开启-jstatd-服务"}},[s._v("#")]),s._v(" 开启 jstatd 服务")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("启动 jstatd 服务，需要有足够的权限。 需要使用 Java 的安全策略分配相应的权限。")])]),s._v(" "),t("li",[t("p",[s._v("创建 jstatd.all.policy 策略文件。")])])]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[s._v("grant codebase "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"file:${java.home}/../lib/tools.jar"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    permission java"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("security"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("AllPermission"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("ul",[t("li",[s._v("启动 jstatd 服务器")])]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[s._v("jstatd "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("J")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("Djava"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("security"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("policy"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("jstatd"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("all"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("policy "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("J")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("Djava"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("rmi"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("server"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("hostname"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v(".31")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v(".241")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("-J 参数是一个公共的参数，如 jps、 jstat 等命令都可以接收这个参数。 由于 jps、 jstat 命令本身也是 Java 应用程序， -J 参数可以为 jps 等命令本身设置 Java 虚拟机参数。")]),s._v(" "),t("p",[s._v("-Djava.security.policy：指定策略文件\n-Djava.rmi.server.hostname：指定服务器的ip地址（可忽略）")]),s._v(" "),t("p",[s._v("默认情况下， jstatd 开启在 1099 端口上开启 RMI 服务器。")]),s._v(" "),t("p",[t("img",{attrs:{src:"/vuebloger/img/post/2843224-fd6162616edef56c.webp",alt:"远程jps查看",title:"远程jps查看"}})]),s._v(" "),t("h2",{attrs:{id:"jps原理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#jps原理"}},[s._v("#")]),s._v(" jps原理")]),s._v(" "),t("p",[s._v("java程序在启动以后，会在java.io.tmpdir指定的目录下，就是临时文件夹里，生成一个类似于hsperfdata_User的文件夹，这个文件夹里（在Linux中为/tmp/hsperfdata_{userName}/），有几个文件，名字就是java进程的pid，因此列出当前运行的java进程，只是把这个目录里的文件名列一下而已。 至于系统的参数什么，就可以解析这几个文件获得。")]),s._v(" "),t("p",[s._v("window系统显示如下：")]),s._v(" "),t("p",[t("img",{attrs:{src:"/vuebloger/img/post/2843224-9d45e86029d6dba5.webp",alt:"临时文件夹",title:"临时文件夹"}})]),s._v(" "),t("p",[s._v("从文件中可以看出 1864、4296、12600 跟上面的 jps 命令输出的进程 ID 一致。")])])}),[],!1,null,null,null);a.default=r.exports}}]);
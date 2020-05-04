(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{621:function(s,a,t){"use strict";t.r(a);var e=t(35),n=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"shell命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#shell命令"}},[s._v("#")]),s._v(" Shell命令")]),s._v(" "),t("p",[s._v("Shell 脚本与 Windows/Dos 下的批处理相似，也就是用各类命令预先放入到一个文件中，方便一次性执行的一个程序文件，主要是方便管理员进行设置或者管理用的。但是它比 Windows 下的批处理更强大，比用其他编程程序编辑的程序效率更高，它使用了 Linux/Unix 下的命令。")]),s._v(" "),t("p",[s._v("更明白地来说，shell script 就像早期 dos 年代的 "),t("a",{attrs:{href:"https://baike.baidu.com/item/%E6%89%B9%E5%A4%84%E7%90%86/1448600?fromtitle=.bat&fromid=6476412",target:"_blank",rel:"noopener noreferrer"}},[s._v(".bat"),t("OutboundLink")],1),s._v("，最简单的功能就是将许多指令汇整写一起，让使用者很容易地就能够一个操作执行多个命令，而 shell script 更是提供了数组，循环，条件以及逻辑判断等重要功能，让使用者可以直接以 shell 来写程序，而不必使用类似 C 程序语言等传统程序编写的语法。"),t("a",{attrs:{href:"https://blog.csdn.net/qq_18297675/article/details/52693464",target:"_blank",rel:"noopener noreferrer"}},[s._v("语法参考"),t("OutboundLink")],1)]),s._v(" "),t("h2",{attrs:{id:"执行命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#执行命令"}},[s._v("#")]),s._v(" 执行命令")]),s._v(" "),t("p",[s._v("方法一： "),t("code",[s._v("bash test.sh")])]),s._v(" "),t("p",[s._v("方法二： 得先增加 test.sh 文件可执行权限")]),s._v(" "),t("p",[t("code",[s._v("chmod 755 test.sh")])]),s._v(" "),t("p",[t("code",[s._v("./test.sh")])]),s._v(" "),t("h2",{attrs:{id:"语法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#语法"}},[s._v("#")]),s._v(" 语法")]),s._v(" "),t("h3",{attrs:{id:"基础语法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#基础语法"}},[s._v("#")]),s._v(" 基础语法")]),s._v(" "),t("ol",[t("li",[t("p",[t("code",[s._v("#!/bin/bash")]),s._v(" #! 是一个约定的标记，它告诉系统这个脚本需要什么解释器来执行，即使用哪一种 Shell")])]),s._v(" "),t("li",[t("p",[t("code",[s._v("set -e")]),s._v(" 确保脚本抛出遇到的错误")])]),s._v(" "),t("li",[t("p",[s._v("数据类型：只有字符串和整型两种")])]),s._v(" "),t("li",[t("p",[s._v("使用双引号")])])]),s._v(" "),t("h3",{attrs:{id:"变量"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#变量"}},[s._v("#")]),s._v(" 变量")]),s._v(" "),t("p",[s._v("shell 的变量赋值的时候不用带 "),t("code",[s._v("$")]),s._v("，而使用或者输出的时候要带 "),t("code",[s._v("$")]),s._v("。加减乘除的时候要加两层小括号。括号外面要有一个 "),t("code",[s._v("$")]),s._v("，括号里面的变量可以不用 "),t("code",[s._v("$")]),s._v("。需要注意的是，变量赋值，等号两边不能有空格，否则会被解析成命令，报错无此命令。")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 变量")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("a")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("b")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("c")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"this is test"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("d")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$((")]),s._v("a"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v("b"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("))")])]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$a")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$c")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$d")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$((")]),s._v("a"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v("b"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("))")])]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br")])]),t("p",[t("img",{attrs:{src:"/vuebloger/img/post/sh1.jpg",alt:"输出"}})]),s._v(" "),t("h3",{attrs:{id:"表达式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#表达式"}},[s._v("#")]),s._v(" 表达式")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("str")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"a b c d e f g h i j"')]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${str}")]),s._v("          "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#源字符串")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("#")]),s._v("str}")]),s._v("         "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#字符串长度，包含空格")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${str"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("5}")]),s._v("        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#截取从第五个后面开始到最后的字符")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${str"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("5"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("2}")]),s._v("      "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#截取从第五个后面开始的2个字符")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${str"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("#")]),s._v("a*f}")]),s._v("      "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#从开头删除a到f的字符")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${str"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("##")]),s._v("a*}")]),s._v("      "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#从开头删除a以后的字符")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${str"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),s._v("f*j}")]),s._v("      "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#从结尾删除f到j的字符")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${str"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%%")]),s._v("*j}")]),s._v("      "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#从结尾删除j前面的所有字符包括j")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${str}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br")])]),t("p",[t("img",{attrs:{src:"/vuebloger/img/post/sh2.jpg",alt:"输出"}})]),s._v(" "),t("h3",{attrs:{id:"判断"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#判断"}},[s._v("#")]),s._v(" 判断")]),s._v(" "),t("p",[s._v("[ ] 里面每个变量之间都要有空格")]),s._v(" "),t("p",[t("code",[s._v("-gt >")]),s._v(" "),t("code",[s._v("-ge >=")]),s._v(" "),t("code",[s._v("-lt <")]),s._v(" "),t("code",[s._v("-le <=")]),s._v(" "),t("code",[s._v("-eq =")]),s._v(" "),t("code",[s._v("-ne !=")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 判断 test 或 []")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("num1")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("num2")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$num1")]),s._v(" -eq "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$num2")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"num1 == num2"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"num1 != num2"')]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$num1")]),s._v(" -eq "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$num2")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"num1 == num2"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"num1 != num2"')]),s._v("\n\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])]),t("p",[t("img",{attrs:{src:"/vuebloger/img/post/sh3.jpg",alt:"输出"}})]),s._v(" "),t("h3",{attrs:{id:"条件语句"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#条件语句"}},[s._v("#")]),s._v(" 条件语句")]),s._v(" "),t("p",[s._v("格式：if 条件 ; then 结果 fi ，最后面一定要有 fi 。在 shell 脚本里面，控制分支结构结束都要和开头的单词相反，例如，"),t("code",[s._v("if <–> fi")]),s._v("，"),t("code",[s._v("case <–> esac")]),s._v("。")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("grades")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("70")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$grades")]),s._v(" -ge "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("90")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$grades")]),s._v(" -le "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Your grade is excellent."')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("elif")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$grades")]),s._v(" -ge "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$grades")]),s._v(" -le "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("89")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Your grade is good."')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("elif")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$grades")]),s._v(" -ge "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("70")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$grades")]),s._v(" -le "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("79")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Your grade is middle."')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("elif")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$grades")]),s._v(" -ge "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("60")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$grades")]),s._v(" -le "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("69")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Your grade is passing."')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Your grade is badly."')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fi")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br")])]),t("h3",{attrs:{id:"循环语句"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#循环语句"}},[s._v("#")]),s._v(" 循环语句")]),s._v(" "),t("h4",{attrs:{id:"while-语句"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#while-语句"}},[s._v("#")]),s._v(" while 语句")]),s._v(" "),t("p",[s._v("while 语句是只要条件为真就执行下面语句。需要注意的是，这里的条件除了 while true 可以这样写，其它的条件都要用 test 或者 [ ] 来判断")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("i")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$1")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("while")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$i")]),s._v(" -gt "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("do")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$i")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("((")]),s._v("i"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("))")])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("done")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("p",[t("img",{attrs:{src:"/vuebloger/img/post/while.jpg",alt:"输出"}})]),s._v(" "),t("h4",{attrs:{id:"until-语句"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#until-语句"}},[s._v("#")]),s._v(" until 语句")]),s._v(" "),t("p",[s._v("until 语句是只要条件为假就执行下列语句。")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("i")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$1")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("until")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$i")]),s._v(" -le "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("do")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$i")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("((")]),s._v("i"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("))")])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("done")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("p",[t("img",{attrs:{src:"/vuebloger/img/post/while.jpg",alt:"输出"}})]),s._v(" "),t("h4",{attrs:{id:"for-语句"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#for-语句"}},[s._v("#")]),s._v(" for 语句")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("a")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("seq")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$a")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token for-or-select variable"}},[s._v("i")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("seq")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#seq是一个命令，顺序生成一串数字或者字符")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("do")]),s._v("\n   "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$i")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("done")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])]),t("p",[t("img",{attrs:{src:"/vuebloger/img/post/for.jpg",alt:"输出"}})]),s._v(" "),t("h3",{attrs:{id:"函数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#函数"}},[s._v("#")]),s._v(" 函数")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("funcName")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    语句\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" 返回值"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("p",[s._v("返回值是可选的，如果没有显示 return 则默认返回最后一条语句执行的结果。")]),s._v(" "),t("p",[s._v("Shell 函数返回值只能是整数，一般用来表示函数执行成功与否，0表示成功，其他值表示失败。如果 return 其他数据，比如一个字符串，往往会得到错误提示："),t("code",[s._v("numeric argument required")]),s._v("。")]),s._v(" "),t("p",[s._v("如果一定要让函数返回字符串，那么可以先定义一个变量，用来接收函数的计算结果，脚本在需要的时候访问这个变量来获得函数返回值。")]),s._v(" "),t("p",[s._v("函数参数从 "),t("code",[s._v("$1")]),s._v(" 到 "),t("code",[s._v("$n")]),s._v("，"),t("code",[s._v("$0")]),s._v(" 是文件名。")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 打印数字")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function-name function"}},[s._v("printNum")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n   "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$1")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token for-or-select variable"}},[s._v("i")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("seq")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#seq是一个命令，顺序生成一串数字或者字符")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("do")]),s._v("\nprintNum "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$i")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("done")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br")])]),t("h2",{attrs:{id:"传参"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#传参"}},[s._v("#")]),s._v(" 传参")]),s._v(" "),t("p",[s._v("采用 "),t("code",[s._v("$0")]),s._v(" , "),t("code",[s._v("$1")]),s._v(" , "),t("code",[s._v("$2")]),s._v(" ...等方式获取脚本命令行传入的参数，"),t("code",[s._v("$0")]),s._v(" 获取到的是脚本路径以及脚本名，后面按顺序获取参数，当参数超过10个时(包括10个)，需要使用 "),t("code",[s._v("${10}")]),s._v(", "),t("code",[s._v("${11}")]),s._v(" ...才能获取到参数，但是一般很少会超过10个参数的情况。")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token shebang important"}},[s._v("#!/bin/bash")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"脚本名'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$0")]),s._v('"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"第一个参数'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$1")]),s._v('"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"第二个参数'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$2")]),s._v('"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"第三个参数'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$3")]),s._v('"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"第四个参数'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$4")]),s._v('"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"第五个参数'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$5")]),s._v('"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"第六个参数'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$6")]),s._v('"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"第七个参数'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$7")]),s._v('"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"第八个参数'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$8")]),s._v('"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"第九个参数'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$9")]),s._v('"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"第十个参数'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$10")]),s._v('"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"第十个参数'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${10}")]),s._v('"')]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br")])]),t("p",[t("img",{attrs:{src:"/vuebloger/img/post/sh4.jpg",alt:"输出"}})])])}),[],!1,null,null,null);a.default=n.exports}}]);
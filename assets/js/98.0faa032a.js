(window.webpackJsonp=window.webpackJsonp||[]).push([[98],{567:function(t,a,_){"use strict";_.r(a);var s=_(47),v=Object(s.a)({},(function(){var t=this,a=t.$createElement,_=t._self._c||a;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h2",{attrs:{id:"关于rfc"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#关于rfc"}},[t._v("#")]),t._v(" 关于rfc")]),t._v(" "),_("p",[t._v("“RFC(Request For Comments)-意即“请求评议”,包含了关于Internet的几乎所有重要的文字资料。")]),t._v(" "),_("p",[t._v("Request For Comments（RFC），是一系列以编号排定的文件。文件收集了有关互联网相关信息，以及UNIX和互联网社区的软件文件。RFC文件是由Internet Society（ISOC）赞助发行。基本的互联网通信协议都有在RFC文件内详细说明。RFC文件还额外加入许多在标准内的论题，例如对于互联网新开发的协议及发展中所有的记录。因此几乎所有的互联网标准都有收录在RFC文件之中。\n")]),t._v(" "),_("h2",{attrs:{id:"幂等"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#幂等"}},[t._v("#")]),t._v(" 幂等")]),t._v(" "),_("h3",{attrs:{id:"概念介绍"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#概念介绍"}},[t._v("#")]),t._v(" 概念介绍")]),t._v(" "),_("p",[t._v("幂等（idempotent、idempotence）是一个数学与计算机学概念，常见于抽象代数中。")]),t._v(" "),_("p",[t._v("在编程中一个幂等操作的特点是其任意多次执行所产生的影响均与一次执行的影响相同。幂等函数，或幂等方法，是指可以使用相同参数重复执行，并能获得相同结果的函数。")]),t._v(" "),_("p",[t._v("这些函数不会影响系统状态，也不用担心重复执行会对系统造成改变")]),t._v(" "),_("p",[t._v("用通俗的话讲：就是针对一个操作，不管做多少次，产生效果或返回的结果都是一样的")]),t._v(" "),_("p",[t._v("举几个例子：")]),t._v(" "),_("p",[t._v("1.比如前端对同一表单数据的重复提交，后台应该只会产生一个结果。")]),t._v(" "),_("p",[t._v("2.比如我们发起一笔付款请求，应该只扣用户账户一次钱，当遇到网络重发或系统bug重发，也应该只扣一次钱。")]),t._v(" "),_("p",[t._v("3.比如发送消息，也应该只发一次，同样的短信如果多次发给用户，用户会崩溃。")]),t._v(" "),_("p",[t._v("4.比如创建业务订单，一次业务请求只能创建一个，不能出现创建多个订单。")]),t._v(" "),_("p",[t._v("还有很多诸如此类的，这些逻辑都需要幂等的特性来支持。")]),t._v(" "),_("h3",{attrs:{id:"高并发-分布式幂等处理"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#高并发-分布式幂等处理"}},[t._v("#")]),t._v(" 高并发/分布式幂等处理")]),t._v(" "),_("p",[t._v("实现幂等性的技术方案")]),t._v(" "),_("h3",{attrs:{id:"_1-查询操作"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-查询操作"}},[t._v("#")]),t._v(" 1.查询操作")]),t._v(" "),_("p",[t._v("查询一次和查询多次，在数据不变的情况下，查询结果是一样的，select是天然的幂等操作。")]),t._v(" "),_("h3",{attrs:{id:"_2-删除操作"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-删除操作"}},[t._v("#")]),t._v(" 2.删除操作")]),t._v(" "),_("p",[t._v("删除操作也是幂等的，删除一次和多次删除都是把数据删除。(注意可能返回结果不一样，删除的数据不存在，返回0，删除的数据多条，返回结果多个)")]),t._v(" "),_("h3",{attrs:{id:"_3-唯一索引，防止新增脏数据"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_3-唯一索引，防止新增脏数据"}},[t._v("#")]),t._v(" 3.唯一索引，防止新增脏数据")]),t._v(" "),_("p",[t._v("拿资金账户和用户账户来说，每个用户只能有一个资金账户，怎么防止给用户创建资金账户多个，那么给资金账户表中的用户ID加唯一索引，在新增的时候只有一个请求成功，剩下都会抛出唯一索引重复异常。比如"),_("code",[t._v("org.springframework.dao.DuplicateKeyException")]),t._v("，这时候再查询一次就可以了，数据存在，返回结果。")]),t._v(" "),_("h3",{attrs:{id:"_4-token机制，防止页面重复提交"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_4-token机制，防止页面重复提交"}},[t._v("#")]),t._v(" 4.token机制，防止页面重复提交")]),t._v(" "),_("p",[t._v("要求：页面的数据只能被点击提交一次")]),t._v(" "),_("p",[t._v("发生原因：由于重复点击或者网络重发，或者nginx重发等情况会导致数据被重复提交")]),t._v(" "),_("p",[t._v("解决办法：")]),t._v(" "),_("p",[t._v("集群环境：采用token加redis")]),t._v(" "),_("p",[t._v("单JVM环境：采用token加redis或token加jvm内存")]),t._v(" "),_("p",[t._v("处理流程：")]),t._v(" "),_("p",[t._v("数据提交前要向服务的申请token，token放到redis或jvm内存，token有效时间")]),t._v(" "),_("p",[t._v("提交后后台校验token，同时删除token，生成新的token返回")]),t._v(" "),_("p",[t._v("token特点：要申请，一次有效性，可以限流。")]),t._v(" "),_("div",{staticClass:"custom-block warning"},[_("p",{staticClass:"custom-block-title"},[t._v("注意细节")]),t._v(" "),_("p",[t._v("redis要用删除操作来判断token，删除成功代表token校验通过，如果用select+delete来校验token，存在并发问题，不建议使用")])]),t._v(" "),_("h3",{attrs:{id:"_5-悲观锁"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_5-悲观锁"}},[t._v("#")]),t._v(" 5.悲观锁")]),t._v(" "),_("p",[t._v("获取数据的时候加锁获取 "),_("code",[t._v("select * from table_xxx where id=’xxx’ for update;")])]),t._v(" "),_("p",[t._v("注意：id字段一定是主键或者唯一索引，不然是锁表，会出事的。悲观锁使用时一般伴随事务一起使用，数据锁定时间可能会很长，根据实际情况选用。")]),t._v(" "),_("h3",{attrs:{id:"_5-乐观锁"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_5-乐观锁"}},[t._v("#")]),t._v(" 5.乐观锁")]),t._v(" "),_("p",[t._v("乐观锁只是在更新数据那一刻锁表，其他时间不锁表，所以相对于悲观锁，效率更高。乐观锁的实现方式多种多样可以通过version或者其他状态条件：")]),t._v(" "),_("p",[t._v("1.通过版本号实现 "),_("code",[t._v("update table_xxx set name=#name#,version=version+1 where version=#version#")])]),t._v(" "),_("p",[t._v("2.通过条件限制 "),_("code",[t._v("update table_xxx set avai_amount=avai_amount-#subAmount# where avai_amount-#subAmount# >= 0")])]),t._v(" "),_("p",[t._v("要求："),_("code",[t._v("avai_amount-subAmount >=0")])]),t._v(" "),_("p",[t._v("这个情景适合不用版本号，只更新是做数据安全校验，适合库存模型，扣份额和回滚份额，性能更高。")]),t._v(" "),_("p",[t._v("注意：乐观锁的更新操作，最好用主键或者唯一索引来更新，这样是行锁，否则更新时会锁表，上面两个sql改成下面的两个更好。")]),t._v(" "),_("div",{staticClass:"language- line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v("update table_xxx set name=#name#,version=version+1 where id=#id# and version=#version# \n\nupdate table_xxx set avai_amount=avai_amount-#subAmount# where id=#id# and avai_amount-#subAmount# >= 0\n")])]),t._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[t._v("1")]),_("br"),_("span",{staticClass:"line-number"},[t._v("2")]),_("br"),_("span",{staticClass:"line-number"},[t._v("3")]),_("br")])]),_("h3",{attrs:{id:"_6-分布式锁"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_6-分布式锁"}},[t._v("#")]),t._v(" 6.分布式锁")]),t._v(" "),_("p",[t._v("还是拿插入数据的例子，如果是分布是系统，构建全局唯一索引比较困难，例如唯一性的字段没法确定，这时候可以引入分布式锁，通过第三方的系统(redis或zookeeper)，在业务系统插入数据或者更新数据，获取分布式锁，然后做操作，之后释放锁，其实就是为了控制多线程并发的操作，也是分布式系统中经常用到的解决思路。")]),t._v(" "),_("h3",{attrs:{id:"_7-select-insert"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_7-select-insert"}},[t._v("#")]),t._v(" 7.select + insert")]),t._v(" "),_("p",[t._v("并发不高的后台系统，或者一些任务JOB，为了支持幂等，支持重复执行，简单的处理方法是，先查询下一些关键数据，判断是否已经执行过，在进行业务处理，就可以了。")]),t._v(" "),_("div",{staticClass:"custom-block warning"},[_("p",{staticClass:"custom-block-title"},[t._v("注意细节")]),t._v(" "),_("p",[t._v("核心高并发流程不要用这种方法。")])]),t._v(" "),_("h3",{attrs:{id:"_8-状态机幂"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_8-状态机幂"}},[t._v("#")]),t._v(" 8.状态机幂")]),t._v(" "),_("p",[t._v("在设计单据相关的业务，或者是任务相关的业务，肯定会涉及到状态机(状态变更图)，就是业务单据上面有个状态，状态在不同的情况下会发生变更，一般情况下存在有限状态机，这时候，如果状态机已经处于下一个状态，这时候来了一个上一个状态的变更，理论上是不能够变更的，这样的话，保证了有限状态机的幂等。")]),t._v(" "),_("div",{staticClass:"custom-block warning"},[_("p",{staticClass:"custom-block-title"},[t._v("注意细节")]),t._v(" "),_("p",[t._v("订单等单据类业务，存在很长的状态流转，一定要深刻理解状态机，对业务系统设计能力提高有很大帮助。")])]),t._v(" "),_("h3",{attrs:{id:"_9-对外接口api保证幂等"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_9-对外接口api保证幂等"}},[t._v("#")]),t._v(" 9.对外接口api保证幂等")]),t._v(" "),_("p",[t._v("如银联提供的付款接口：需要接入商户提交付款请求时附带：source来源，seq序列号source+seq在数据库里面做唯一索引，防止多次付款，(并发时，只能处理一个请求)。")]),t._v(" "),_("div",{staticClass:"custom-block tip"},[_("p",{staticClass:"custom-block-title"},[t._v("重点")]),t._v(" "),_("p",[t._v("对外提供接口为了支持幂等调用，接口有两个字段必须传，一个是来源source，一个是来源方序列号seq，这个两个字段在提供方系统里面做联合唯一索引，这样当第三方调用时，先在本方系统里面查询一下，是否已经处理过，返回相应处理结果；没有处理过，进行相应处理，返回结果。注意，为了幂等友好，一定要先查询一下，是否处理过该笔业务，不查询直接插入业务系统，会报错，但实际已经处理了。")])]),t._v(" "),_("h2",{attrs:{id:"关于http302、303、307状态码"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#关于http302、303、307状态码"}},[t._v("#")]),t._v(" 关于HTTP302、303、307状态码")]),t._v(" "),_("h3",{attrs:{id:"状态码-302"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#状态码-302"}},[t._v("#")]),t._v(" 状态码——302")]),t._v(" "),_("p",[t._v("RFC1945(http://tools.ietf.org/html/rfc1945#page-34)，也就是HTTP1.0在介绍302时说，如果客户端发出POST请求后，收到服务端的302状态码，那么不能自动的向新的URI发送重复请求，必须跟用户确认是否该重发，因为第二次POST时，环境可能已经发生变化（POST方法不是幂等的），POST操作会不符合用户预期。")]),t._v(" "),_("p",[t._v("但是，很多浏览器在这种情况下都会把POST请求变为GET请求。")]),t._v(" "),_("p",[t._v("RFC2616(http://tools.ietf.org/html/rfc2616#section-10.3.3)，也就是HTTP1.1在介绍302时说，如果客户端发出非GET、HEAD请求后，收到服务端的302状态码，那么就不能自动的向新URI发送重复请求，除非得到用户的确认。")]),t._v(" "),_("p",[t._v("但是，很多浏览器都把302当作303处理了（注意，303是HTTP1.1才加进来的，其实从HTTP1.0进化到HTTP1.1，浏览器什么都没动），它们获取到HTTP响应报文头部的Location字段信息，并发起一个GET请求。")]),t._v(" "),_("h3",{attrs:{id:"状态码-303和307"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#状态码-303和307"}},[t._v("#")]),t._v(" 状态码——303和307")]),t._v(" "),_("p",[t._v("从上面的介绍可以知道，HTTP1.1和HTTP1.0的302状态码意义是一样的，浏览器对它的处理也是一样的。POST方法的重定向在未询问用户的情况下就变成GET，这种不符合文档规范的问题依然存在。实践在前而文档在后，HTTP1.1把这种POST变GET的行为纳入了RFC文档：HTTP1.1新加入303和307状态码。")]),t._v(" "),_("p",[t._v("文档中规定303状态码的响应，也就是上边提到的现在浏览器对302状态码的处理：POST重定向为GET。")]),t._v(" "),_("p",[t._v("HTTP1.1文档中307状态码则相当于HTTP1.0文档中的302状态码，当客户端的POST请求收到服务端307状态码响应时，需要跟用户询问是否应该在新URI上发起POST方法，也就是说，307是不会把POST转为GET的。")]),t._v(" "),_("p",[t._v("从网络上搜索到这个说法“303：对于POST请求，它表示请求已经被处理，客户端可以接着使用GET方法去请求Location里的URI。 307：对于POST请求，表示请求还没有被处理，客户端应该向Location里的URI重新发起POST请求。”，从上面的介绍可以明白，这个说法是臆想而已，文档并没有这么说，而业界是否统一如此处理，还不好说。")]),t._v(" "),_("p",[t._v("文档也说到，为兼容很多HTTP1.1之前的浏览器，服务端在需要发出303状态码时，会选择用302状态码替代；而对于307的处理，则需要在响应实体中包含信息，以便不能处理307状态码的用户有能力在新URI中发起重复请求，也就是说，把重定向的页面展示给用户，让用户去点重定向URI链接（URI现在基本就是URL）。")]),t._v(" "),_("h3",{attrs:{id:"总结"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),_("p",[t._v("303和307是HTTP1.1新加的服务器响应文档的状态码，它们是对HTTP1.0中的302状态码的细化，主要用在对非GET、HEAD方法的响应上。文档规定：浏览器对303状态码的处理跟原来浏览器对HTTP1.0的302状态码的处理方法一样；浏览器对307状态码处理则跟原来HTTP1.0文档里对302的描述一样。\n303和307的存在，归根结底是由于POST方法的非幂等属性引起的。")]),t._v(" "),_("p",[t._v("在HTTP1.1中，302理论上是要被放弃掉的，它被细化为303和307，但为了兼容，它目前还在业界中大量使用。为什么业界少使用303和307呢？对于GET和HEAD方法来说，307是没必要存在的，用302或者303就可以满足需求了，307仅在POST方法的重定向上有用处。原因有两方面：1、POST方法重定向的使用场景太少，使得307状态码没有用武之地；2、GET方法虽然常需要使用的重定向，但使用302状态码也能正确运转，再考虑到微乎其微的兼容问题（现在的浏览器怎么可能不支持HTTP1.1呢！），也就没有使用303的必要了。")]),t._v(" "),_("h2",{attrs:{id:"重定向post请求"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#重定向post请求"}},[t._v("#")]),t._v(" 重定向post请求")]),t._v(" "),_("p",[t._v("比如重定向到登录路由并且发起POST请求实现登录,那么响应307即可")]),t._v(" "),_("p",[t._v("303: POST请求会被转换为GET请求，当然那就无法就收字段了！")]),t._v(" "),_("p",[t._v("307：307 重定向是可以把 POST 的数据也一并重定向的，而且保持POST请求！")])])}),[],!1,null,null,null);a.default=v.exports}}]);
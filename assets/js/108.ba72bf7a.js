(window.webpackJsonp=window.webpackJsonp||[]).push([[108],{589:function(v,_,p){"use strict";p.r(_);var a=p(47),t=Object(a.a)({},(function(){var v=this,_=v.$createElement,p=v._self._c||_;return p("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[p("h2",{attrs:{id:"基本概念"}},[p("a",{staticClass:"header-anchor",attrs:{href:"#基本概念"}},[v._v("#")]),v._v(" 基本概念")]),v._v(" "),p("p",[v._v("1.什么是区块链")]),v._v(" "),p("p",[v._v("把多笔交易的信息以及表明该区块的信息打包放在一起，经验证后的这个包就是区块。\n每个区块里保存了上一个区块的hash值，使区块之间产生关系，也就是说的链了。合起来就叫区块链。")]),v._v(" "),p("p",[v._v("2.什么是比特币")]),v._v(" "),p("p",[v._v("比特币概念是2009年中本聪提出的，总量是2100万个。比特币链大约每10分钟产生一个区块，这个区块是矿工挖了10分钟挖出来的。作为给矿工奖励，一定数量的比特币会发给矿工们，但是这个一定数量是每四年减半一次。现在是12.5个。照这样下去2040年全部的比特币问世。")]),v._v(" "),p("p",[v._v("3.什么是以太坊")]),v._v(" "),p("p",[v._v("以太坊与比特币最大的区别是有了智能合约。使得开发者在上边可以开发，运行各种应用。\n")]),v._v(" "),p("h2",{attrs:{id:"区块链的特点"}},[p("a",{staticClass:"header-anchor",attrs:{href:"#区块链的特点"}},[v._v("#")]),v._v(" 区块链的特点")]),v._v(" "),p("p",[v._v("4.分布式账本")]),v._v(" "),p("p",[v._v("它是一种在网络成员之间共享，复制和同步的数据库。直白说，在区块链上的所有用户都有记账功能，而且内容一致，这样保证了数据不可篡改性。")]),v._v(" "),p("p",[v._v("5.什么是准匿名性")]),v._v(" "),p("p",[v._v("相信大家都有钱包，发送交易都用的钱包地址（一串字符串）这就是准匿名。")]),v._v(" "),p("p",[v._v("6.什么是开放透明性/可追溯")]),v._v(" "),p("p",[v._v("区块链存储了从历史到现在的所有数据，任何人都可以查看，而且还可以查看到历史上的任何数据。")]),v._v(" "),p("p",[v._v("7.什么是不可篡改")]),v._v(" "),p("p",[v._v("历史数据和当前交易的数据不可篡改。数据被存在链上的区块上，有一个hash值，如果修改该区块信息，那么它的hash值也变了，它后边的所有区块的hash值也必须修改，使成为新的链。同时主链还在进行交易产生区块。修改后链也必须一直和主链同步产生区块，保证链的长度一样。代价太大了，只为修改一条数据。")]),v._v(" "),p("p",[v._v("8.什么是抗ddos攻击")]),v._v(" "),p("p",[v._v("ddos：黑客通过控制许多人的电脑或者手机，让他们同时访问一个网站，由于服务器的宽带是有限的，大量流量的涌入可能会使得网站可能无法正常工作，从而遭受损失。\n但区块链是分布式的，不存在一个中心服务器，一个节点出现故障，其他节点不受影响。理论上是超过51%的节点遭受攻击，会出现问题。")]),v._v(" "),p("h2",{attrs:{id:"区块链分类"}},[p("a",{staticClass:"header-anchor",attrs:{href:"#区块链分类"}},[v._v("#")]),v._v(" 区块链分类")]),v._v(" "),p("p",[v._v("9.主链的定义")]),v._v(" "),p("p",[v._v("以比特币为例，某个时间点一个区块让2个矿工同时挖出来，然后接下来最先产生6个区块的链就是主链")]),v._v(" "),p("p",[v._v("10.单链/多链")]),v._v(" "),p("p",[v._v("单链指的是一条链上处理所有事物的数据结构。\n多链结构，其核心本质是公有链+N个子链构成。只有一条，子链理论上可以有无数条，每一个子链都可以运行一个或多个DAPP系统")]),v._v(" "),p("p",[v._v("11.公有链/联盟链/私有链")]),v._v(" "),p("p",[v._v("公有链：每个人都可以参与到区块链的记账中来，并可以下载完整的交易信息。")]),v._v(" "),p("p",[v._v("联盟链：只允许联盟成员参与记账和查询")]),v._v(" "),p("p",[v._v("私有链：写入和查看的权限只掌握在一个组织手里。")]),v._v(" "),p("h2",{attrs:{id:"区块链的层级结构"}},[p("a",{staticClass:"header-anchor",attrs:{href:"#区块链的层级结构"}},[v._v("#")]),v._v(" 区块链的层级结构")]),v._v(" "),p("p",[v._v("12.共识层，数据层等")]),v._v(" "),p("p",[v._v("区块链整体结构有六个：数据层，网络层，共识层，激励层，合约层，应用层。数据层：记录数据的一层，属于底层技术；网络层：构建区块链网络的一种架构，它决定了用户与用户之间通过何种方式组织起来。共识层：提供了一套规则，让大家接收和存储的信息达成一致。激励层：设计激励政策，鼓励用户参与到区块链生态中；合约层：一般指“智能合约”，它是一套可以自动执行，根据自己需求编写的合约体系。应用层：区块链上的应用程序，与手机的app类似。")]),v._v(" "),p("h2",{attrs:{id:"区块链的基本技术"}},[p("a",{staticClass:"header-anchor",attrs:{href:"#区块链的基本技术"}},[v._v("#")]),v._v(" 区块链的基本技术")]),v._v(" "),p("h3",{attrs:{id:"区块"}},[p("a",{staticClass:"header-anchor",attrs:{href:"#区块"}},[v._v("#")]),v._v(" 区块")]),v._v(" "),p("p",[v._v("13.时间戳")]),v._v(" "),p("p",[v._v("时间戳是指从1970年1月1日0时0分0秒0…到现在的当前时间的总秒数，或者总纳秒数等等很大的数字。\n每个区块生成时都有一个时间戳，表明生成区块的时间。")]),v._v(" "),p("p",[v._v("14.区块/区块头/区块体")]),v._v(" "),p("p",[v._v("区块是区块链的基本单元，区块头和区块体是区块链的组成部分。区块头里面包含的信息有上一个区块的hash，本区块的hash，时间戳等等。区块体就是区块里的详细数据。")]),v._v(" "),p("p",[v._v("15.Merkle树")]),v._v(" "),p("p",[v._v("Merkle树，也叫二叉树，是存储数据的一种数据结构，最底层是所有区块包含的原始数据，上一层是每个区块的hash值，这一层的hash两两组合产生新的hash值，形成新的一层，然后一层层往上，一直到产生一个hash值。这样的结构可以用于快速比较大量的数据，不需要下载全部的数据就可以快速的查找你想要的最底层的历史数据。")]),v._v(" "),p("p",[v._v("16.什么是扩容")]),v._v(" "),p("p",[v._v("比特币的一个区块大小大约是1M左右，可以保存4000笔交易记录。扩容就是想把区块变大，能保存更多的数据。")]),v._v(" "),p("h3",{attrs:{id:"数据结构"}},[p("a",{staticClass:"header-anchor",attrs:{href:"#数据结构"}},[v._v("#")]),v._v(" 数据结构")]),v._v(" "),p("p",[v._v("17.什么是链")]),v._v(" "),p("p",[v._v("每个区块都会保存上一个区块的hash，使区块之间产生关系，这个关系就是链。通过这个链把区块交易记录以及状态变化等的数据存储起来。")]),v._v(" "),p("p",[v._v("18.区块高度")]),v._v(" "),p("p",[v._v("这个不是距离上说的高度，它指是该区块与所在链上第一个区块之间相差的区块总个数。这个高度说明了就是第几个区块，只是标识作用。")]),v._v(" "),p("p",[v._v("19.分叉")]),v._v(" "),p("p",[v._v("同一时间内产生了两个区块（区块里的交易信息是一样的，只是区块的hash值不一样），之后在这两个区块上分叉出来两条链，这两条链接下来谁先生成6个区块，谁就是主链，另外的一条链丢弃。")]),v._v(" "),p("p",[v._v("20.幽灵协议")]),v._v(" "),p("p",[v._v("算力高的矿池很容易比算力低的矿机产生区块速度快，导致区块链上大部分区块由这些算力高的矿池产生的。而算力低的矿机产生的区块因为慢，没有存储到链上，这些区块将会作废。\n幽灵协议使得本来应该作废的区块，也可以短暂的留在链上，而且也可以作为工作量证明的一部分。这样一来，小算力的矿工，对主链的贡献比重就增大了，大型矿池就无法独家垄断对新区块的确认。")]),v._v(" "),p("p",[v._v("21.孤块")]),v._v(" "),p("p",[v._v("之前说过分叉，孤块就是同一时间产生的区块，有一个形成了链，另一个后边没有形成链。那么这个没形成链的块就叫孤块。")]),v._v(" "),p("p",[v._v("22.叔块")]),v._v(" "),p("p",[v._v("上边说的孤块，通过幽灵协议，使它成为工作量证明的一部分，那它就不会被丢弃，会保存在主链上。这个区块就是下一个区块的叔块。")]),v._v(" "),p("p",[v._v("23.重放攻击")]),v._v(" "),p("p",[v._v("就是黑客把已经发送给服务器的消息，重新又发了一遍，有时候这样可以骗取服务器的多次响应。")]),v._v(" "),p("p",[v._v("24.有向无环图")]),v._v(" "),p("p",[v._v("也叫数据集合DAG(有向非循环图)DAG是一种理想的多链数据结构。现在说的区块链大都是单链，也就是一个区块连一个区块，DAG是多个区块相连。好处是可以同时生成好几个区块，于是网络可以同时处理大量交易，吞吐量肯定就上升了。但是缺点很多，目前属于研究阶段。\n"),p("img",{attrs:{src:"/vuebloger/img/post/20180728124011751.png",alt:""}})]),v._v(" "),p("p",[v._v("以太坊DAG：")]),v._v(" "),p("h3",{attrs:{id:"解密算法"}},[p("a",{staticClass:"header-anchor",attrs:{href:"#解密算法"}},[v._v("#")]),v._v(" 解密算法")]),v._v(" "),p("p",[v._v("25.什么是加密/非对称性加密")]),v._v(" "),p("p",[v._v("对称加密是加密算法和解密算法都是同一模式，用秘钥来对信息进行加解密，通常情况下，密钥越长，代表着密文被破解的难度越大。对称加密有一个最大弱点：只有一把密钥保证加密和解密数据，所以甲方必须把密钥告诉乙方，否则乙方无法解密。而保存和传递密钥，就成了最头疼的问题。\n非对称加密需要两个（一对）密钥：公开密钥（publickey）和私有密钥（privatekey），用公钥对数据进行加密后，只有对应的私钥才能解密；反之如果私钥用于加密，则只有对应的公钥才能解密。这样可以保证通信双方是通信数据是私密的，并且能确认双方的身份。\n发送的信息以密文的形式传递，接受者能解密的是对称加密，不能解密的是非对称。")]),v._v(" "),p("p",[p("img",{attrs:{src:"/vuebloger/img/post/20180728124047492.png",alt:""}})]),v._v(" "),p("p",[v._v("26.数字签名/数字身份/数字证书")]),v._v(" "),p("p",[v._v("私钥签名，公钥验签。私钥里对应两个大数r，s，把公布的消息和r，s打包成一条信息和公钥一起发送，接收者通过公钥解码信息，产生r，s，对比公钥里的r，s是否一样，一样表示验签成功。")]),v._v(" "),p("p",[v._v("数字身份就是你在网络上的身份，往往对应着一个唯一的身份识别号，你在网络上进行的操作，都是通过数字身份进行的。")]),v._v(" "),p("p",[v._v("数字证书：由一些认证机构颁发，证明某个数字签名背后对应的现实中的真实身份。")]),v._v(" "),p("p",[v._v("27.RSA/椭圆加密算法")]),v._v(" "),p("p",[v._v("这两种加密方式目前最安全。RSA的密钥长度一般是1024位，而椭圆加密密钥长度是256位。这是主要区别。")]),v._v(" "),p("p",[v._v("28.环签名")]),v._v(" "),p("p",[v._v("当我与别人进行交易的时候，我会把自己的私钥和别人的公钥混合在一起，通过某种方式处理成一个签名。由于这是一个多人签名，而且人与人之间无序，这就叫环签名。这样一来，别人只知道这群人参加了交易，单不知道其中谁在交易。")]),v._v(" "),p("p",[v._v("29.混币服务")]),v._v(" "),p("p",[v._v("一般来说，区块链上每笔交易信息都会显示一个输入地址和一个输出地址，这样交易双方的地址就暴漏了。而混沌服务就可以把好几笔金额相同的交易在一起进行记录，其中多人输入地址混合，多个输出地址混合。这样就消除了交易双方的对应关系。")]),v._v(" "),p("p",[v._v("30.零知识证明")]),v._v(" "),p("p",[v._v("咱们群里有讲过这个知识点。这个方法运用在区块链上，就能完全不透露双方交易信息，但是能达成交易。")]),v._v(" "),p("h2",{attrs:{id:"分布式技术"}},[p("a",{staticClass:"header-anchor",attrs:{href:"#分布式技术"}},[v._v("#")]),v._v(" 分布式技术")]),v._v(" "),p("p",[v._v("31.节点/全节点/")]),v._v(" "),p("p",[v._v("节点：分布式系统中网络的节点，一般指通过网络连接的服务器，计算机等等，你的电脑也可以作为网络上的一个节点。\n全节点：是指拥有该网络上的全部数据的节点。全节点需要同步所有的区块链数据，它能够独立验证区块链上的所有交易并实时更新数据。主要负责给给其他节点发送交易信息，这样其他节点就可以不需要下载全部数据也可以快速验证交易了。")]),v._v(" "),p("p",[v._v("32.点对点通讯")]),v._v(" "),p("p",[v._v("两节点直接进行通讯，不需要经过第三方，保证用户的隐私。")]),v._v(" "),p("p",[v._v("33.分布式存储")]),v._v(" "),p("p",[v._v("传统的分布式存储是一个中心化的机构在很多地方做了数据备份，在区块链里是通过链中的各个节点开放的存储空间来建立整个区块链里的分布式数据库。区块链里的分布式存储可以提高网络的运行效率，解决了传统分布式存储中服务器处理速度的瓶颈。")]),v._v(" "),p("h2",{attrs:{id:"共识机制"}},[p("a",{staticClass:"header-anchor",attrs:{href:"#共识机制"}},[v._v("#")]),v._v(" 共识机制")]),v._v(" "),p("p",[v._v("34.什么是共识机制")]),v._v(" "),p("p",[v._v("在区块链里大家都认同的一个规则。所有的交易或者其他信息传递需要经过共识机制的确认，确认合法后才能将这个信息保存在链上。这样就保证了大家记账的一致性和准确性。")]),v._v(" "),p("p",[v._v("35.pow")]),v._v(" "),p("p",[v._v("英文是proof of work，也就是工作量证明。比特币挖矿就是pow机制。原理就是计算机通过变量（nonce）变化，不断的计算产生一串串数字，直到某一串数字满足指定的难度要求，才停止这次计算。这串数字就是新生成区块的hash值。")]),v._v(" "),p("p",[v._v("36.pos")]),v._v(" "),p("p",[v._v("英文是proof of stake,也就是权益证明机制。pos机制直接与持有的代币数量和持币时间挂钩。这种模式会根据你持有数字货币的量和时间，分配给你相应的利息。\n简单来说，就是一个根据你持有货币的量和时间，给你发利息的一个制度，在股权证明POS模式下，有一个名词叫币龄，每个币每天产生1币龄，比如你持有100个币，总共持有了30天，那么，此时你的币龄就为3000，这个时候，如果你发现了一个POS区块，你的币龄就会被清空为0。你每被清空365币龄，你将会从区块中获得0.05个币的利息(假定利息可理解为年利率5%)，那么在这个案例中，利息 = 3000 * 5% / 365 = 0.41个币，这下就很有意思了，持币有利息。")]),v._v(" "),p("p",[v._v("37.DPOS")]),v._v(" "),p("p",[v._v("英文是delegated proof of stake，委托股权证明。\nDPoS给出一种思路，将成千上万个PoS节点，通过某种机制（例如持有代币的数量）选举出若干（奇数个）节点，在这几个节点之间进行投票选举（在一些实现中甚至会在这些节点间以令牌环的方式进行轮询，进一步减少投票开销）出每次的检查点（出块）节点，而不用在网络中全部节点之间进行选择。")]),v._v(" "),p("p",[v._v("这种机制能够大幅度提升选举效率。在几十个最多上百节点之间进行一致性投票一般来说可以在秒级完成并达到共识，因此DPoS机制可以将检查点（事务确认时间）提升到秒级，通过减少投票节点的数量或采用令牌环机制甚至可以降低到毫秒级。")]),v._v(" "),p("p",[p("img",{attrs:{src:"/vuebloger/img/post/20180728124124451.JPG",alt:""}}),v._v(" "),p("img",{attrs:{src:"/vuebloger/img/post/2018072812415474.jpg",alt:""}})]),v._v(" "),p("p",[v._v("38.51%攻击")]),v._v(" "),p("p",[v._v("一个人控制了全网50%以上的算力，那么他会在竞争下一个区块的记账权的时候更有优势，会比其他人更快的完成工作量证明。这个人因为拥有这么大的算力，很容易会做到1、修改自己的交易记录，这可以使他进行双重支付2、阻止区块确认部分或者全部交易3、阻止部分或全部矿工开采到任何有效的区块")]),v._v(" "),p("p",[v._v("39.拜占庭将军问题")]),v._v(" "),p("p",[v._v("描述10个小国攻打一个大国的故事。这个网上可以搜到，不赘述。")]),v._v(" "),p("p",[v._v("40.改进型实用拜占庭容错PBFT")]),v._v(" "),p("p",[v._v("我们重点讨论预准备（pre-prepare）、准备(prepare)和确认(commit)这三个历史性阶段。预准备和准备两个阶段用来确保同一个视图中请求发送的时序性（即使对请求进行排序的主节点失效了），准备和确认两个阶段用来确保在不同的视图之间的确认请求是严格排序的。")]),v._v(" "),p("p",[v._v("预准备阶段\n在预准备阶段，主节点分配一个序列号n给收到的请求，然后向所有备份节点群发预准备消息")]),v._v(" "),p("h2",{attrs:{id:"区块链扩展技术"}},[p("a",{staticClass:"header-anchor",attrs:{href:"#区块链扩展技术"}},[v._v("#")]),v._v(" 区块链扩展技术")]),v._v(" "),p("p",[v._v("44.分片")]),v._v(" "),p("p",[v._v("分片技术可以解决交易速度慢和吞吐量低的问题。它将网络上的交易分割成许多小片，不同节点负责验证不同小片的内容。这样节点越多，能同时验证的交易数量也越多，验证的总体速度就加快了。有了分片技术，不同的交易由不同的节点验证。区块链就像一个高度公路上只有一个收费站，因此容易拥堵；分片技术就像提供了好几个收费站，使车辆能迅速通过。但是缺点致命，可能会内容冲突的交易因为不同节点验证通过，而造成双重支付。目前处在研究。")]),v._v(" "),p("p",[v._v("45.闪电网络/雷电网络")]),v._v(" "),p("p",[v._v("闪电网络就是让小额交易放在单独一条链上，关键交易放在主链上，这样来提高交易的吞吐量。它采用了一种时间锁技术，如果一方想要篡改交易，另一方在一段时间内发现了这种作弊行为，则可以惩罚对方，同时保护自己的财产不受损失。处于适用阶段。")]),v._v(" "),p("p",[v._v("基于闪电网络的思路，以太坊社区也提出了自己的链下微支付通道解决方案，它通过智能合约来实现，这就是雷电网络。")]),v._v(" "),p("p",[v._v("46.跨链和互联链")]),v._v(" "),p("p",[v._v("kua lian也就是银行的跨行转账类似。典型的跨链技术：公证人机制，侧链，哈希锁定模式。\n互联链是指各种不同的区块链通过某种技术连接起来。")]),v._v(" "),p("p",[v._v("47.侧链")]),v._v(" "),p("p",[v._v("侧链是一种连通两种不同的区块链的机制。通过侧链，我们可以把代币转到其他区块链项目上，还可以安全的返回。实现方法：通过侧链技术，我们可以锁定一笔比特币；而另一个区块链项目收到锁定信息后，将允许用户使用一笔与比特币价值相等的的代币。在这期间，各种交易/操作完成后，剩余的代币将被重新锁定，而一个处理消息将会发回比特币主链，使剩余的比特币得到解锁。侧链是一个独立的、隔离的系统，侧链中出现的问题只会影响侧链本身，这极大地降低了创新风险和成本。")]),v._v(" "),p("p",[v._v("48.图灵完备")]),v._v(" "),p("p",[v._v("如果一个系统可以编写一个找到答案的程序，这个系统就是图灵完备的。具体实现就是靠智能合约，用户可以根据自己的需求来编写代码，实现所需的功能，调用即可。")]),v._v(" "),p("p",[v._v("49.去中心化应用DApp")]),v._v(" "),p("p",[v._v("dapp一般具有开源、自治的特点。app中的数据经过加密后存储在区块链上，保证安全，保护隐私，同时可以改变生产关系。比如在dapp中，用户访问流量所产生的收益，可以直接输出给内容生产者，而不需要经过平台的抽成。")]),v._v(" "),p("h2",{attrs:{id:"区块链技术应用"}},[p("a",{staticClass:"header-anchor",attrs:{href:"#区块链技术应用"}},[v._v("#")]),v._v(" 区块链技术应用")]),v._v(" "),p("h3",{attrs:{id:"数字货币"}},[p("a",{staticClass:"header-anchor",attrs:{href:"#数字货币"}},[v._v("#")]),v._v(" 数字货币")]),v._v(" "),p("p",[v._v("50.数字货币")]),v._v(" "),p("p",[v._v("是基于网络算法产生的数字，这些数字被认可的群体被赋予发币的功能，进行交易。")]),v._v(" "),p("h3",{attrs:{id:"智能合约"}},[p("a",{staticClass:"header-anchor",attrs:{href:"#智能合约"}},[v._v("#")]),v._v(" 智能合约")]),v._v(" "),p("p",[v._v("51.智能合约")]),v._v(" "),p("p",[v._v("就是在源码中留一块地放智能合约代码。合约里的方法可以被外部调用。")]),v._v(" "),p("p",[v._v("52.EVM")]),v._v(" "),p("p",[v._v("以太坊虚拟机的简称。它是建立在以太坊区块链上的一个代码运行环境，用来执行以太坊的智能合约。以太坊是一个点对点的网络，每个节点都会运行着以太坊虚拟机。当一个智能合约生效的时候，节点上的虚拟机就编译代码，执行合约，存储数据，确保执行结果记录在区块链上。")]),v._v(" "),p("p",[v._v("53.token")]),v._v(" "),p("p",[v._v("一般认为是代币。严格来讲应该叫数字权益证明。")]),v._v(" "),p("h2",{attrs:{id:"数字货币的交易"}},[p("a",{staticClass:"header-anchor",attrs:{href:"#数字货币的交易"}},[v._v("#")]),v._v(" 数字货币的交易")]),v._v(" "),p("h3",{attrs:{id:"账户相关"}},[p("a",{staticClass:"header-anchor",attrs:{href:"#账户相关"}},[v._v("#")]),v._v(" 账户相关")]),v._v(" "),p("p",[v._v("54.公钥/私钥")]),v._v(" "),p("p",[v._v("这属于加密范畴。安全散列算法（Secure Hash Algorithm，缩写为SHA），用改算法给任意长度的数据能计算出长度固定的字符串（又称消息摘要），并且该字符串是唯一的。")]),v._v(" "),p("p",[v._v("比特币私钥其实是使用SHA-256生成的32字节（256位）的随机数，有效私钥的范围则取决于比特币使用的secp256k1 椭圆曲线数字签名标准。大小介于0x1 到0xFFFF FFFF FFFF FFFF FFFF FFFF FFFF FFFE BAAE DCE6 AF48 A03B BFD2 5E8C D036 4140之间的数几乎都是合法的私钥。")]),v._v(" "),p("p",[v._v("在私钥的前面加上版本号，后面添加压缩标志和附加校验码，（所谓附加校验码，就是对私钥经过2次SHA-256运算，取两次哈希结果的前四字节），然后再对其进行Base58编码，就可以得到我们常见的WIF（Wallet import Format)格式的私钥。")]),v._v(" "),p("p",[v._v("私钥经过椭圆曲线乘法运算，可以得到公钥。公钥是椭圆曲线上的点，并具有x和y坐标。公钥有两种形式：压缩的与非压缩的。早期比特币均使用非压缩公钥，现在大部分客户端默认使用压缩公钥。")]),v._v(" "),p("p",[v._v("由于数学原理，从私钥推算公钥是可行的，从公钥逆推私钥是不可能的。")]),v._v(" "),p("p",[v._v("初识比特币的人常有一种误解，认为比特币公钥就是地址，这是不正确的。从公钥到地址还要经过一些运算。")]),v._v(" "),p("p",[v._v("55.地址")]),v._v(" "),p("p",[v._v("椭圆曲线算法生成的公钥信息比较长，压缩格式的有33字节，非压缩的则有65字节。地址是为了减少接收方所需标识的字节数。比特币地址的生成步骤如下：")]),v._v(" "),p("p",[v._v("1 生成私钥与公钥")]),v._v(" "),p("p",[v._v("2 将公钥通过SHA256哈希算法处理得到32字节的哈希值")]),v._v(" "),p("p",[v._v("3 对得到的哈希值通过RIPEMD-160算法来得到20字节的哈希值 —— Hash160")]),v._v(" "),p("p",[v._v("4 把版本号+Hash160组成的21字节数组进行双次SHA256哈希运算，得到的哈希值的头4个字节作为校验和，放置21字节数组的末尾。")]),v._v(" "),p("p",[v._v("5 对组成25位数组进行Base58编码，就得到地址。")]),v._v(" "),p("p",[v._v("具体的过程我们不需要去一一弄清楚，这里面涉及到很的数学公式和原理。但是我们需要从中理解到下面的几点：")]),v._v(" "),p("p",[v._v("由于椭圆曲线乘法以及哈希函数的特性，我们可以从私钥推导出公钥，也可以从公钥推导出地址，而这个过程是不可逆的。也正因如此，在整个比特币（以太坊等）系统中，公钥是可以公开的，也就是说钱包地址是安全的。私钥是最关键的部分。")]),v._v(" "),p("h3",{attrs:{id:"挖矿相关"}},[p("a",{staticClass:"header-anchor",attrs:{href:"#挖矿相关"}},[v._v("#")]),v._v(" 挖矿相关")]),v._v(" "),p("p",[v._v("56.挖矿/矿工/区块奖励")]),v._v(" "),p("p",[p("img",{attrs:{src:"/vuebloger/img/post/20180728124254701.jpg",alt:""}})]),v._v(" "),p("p",[v._v("挖矿过程就是对以上这六个字段进行一系列的转换、连接和哈希运算，并随着不断一个一个试要寻找的随机数，最后成功找到一个随机数满足条件：经过哈希运算后的值，比预设难度值的哈希值小，那么，就挖矿成功了，节点可以向邻近节点进行广播该区块，邻近节点收到该区块，对以上六个字段进行同样的运算，验证合规，再向其它结点转播，其它结点也用同样的算法进行验证，如果全网有51%的结点都验证成功，这个区块就算真正地“挖矿”成功了，每个结点都把这个区块加在上一个区块的后面，并把区块中与自己记录相同的列表删除，再次复生上述过程。")]),v._v(" "),p("p",[v._v("另外要说的是，不管挖矿成不成功，每个节点都预先把奖励的比特币50个、所有交易的手续费（总输入－总输出）记在交易列表的第一项了（这是“挖矿”最根本的目的，也是保证区块链能长期稳定运行的根本原因），输出地址就是本结点的地址，但如果挖矿不成功，这笔交易就作废了，没有任何奖励。而且这笔叫作“生产交易”的交易不参与“挖矿”计算。")]),v._v(" "),p("p",[v._v("57.矿机/矿场")]),v._v(" "),p("p",[v._v("矿机就是各种配置的计算机，算力是他们的最大差距。矿机集中在一个地的地方就是矿场")]),v._v(" "),p("p",[v._v("58.矿池")]),v._v(" "),p("p",[v._v("就是矿工们联合起来一起组成一个团队，这个团队下的计算机群就是矿池。挖矿奖励，是根据自己的算力贡献度分发。")]),v._v(" "),p("p",[v._v("59.挖矿难度和算力")]),v._v(" "),p("p",[v._v("挖矿难度是为了保证产生区块的间隔时间稳定在某个时间短内，如比特币10分钟出块1个。算力就是矿机的配置")]),v._v(" "),p("h2",{attrs:{id:"交易相关"}},[p("a",{staticClass:"header-anchor",attrs:{href:"#交易相关"}},[v._v("#")]),v._v(" 交易相关")]),v._v(" "),p("p",[v._v("60.验证")]),v._v(" "),p("p",[v._v("当区块链里的验证是对交易合法性的一种确认，交易消息在节点之间传播时，每个节点都会验证一次这笔交易是否合法。比如验证交易的语法是否正确，交易的金额是否大于0，输入的交易金额是否合理，等等。验证通过后打包，交给矿工挖矿。")]),v._v(" "),p("p",[v._v("61.交易广播")]),v._v(" "),p("p",[v._v("就是该节点给其他节点通过网络发送信息。")]),v._v(" "),p("p",[v._v("62.矿工费")]),v._v(" "),p("p",[v._v("区块链要像永动机一样不停的工作，需要矿工一直维护着这个系统。所以要给矿工们好处费，才能持久。")]),v._v(" "),p("p",[v._v("63.交易确认")]),v._v(" "),p("p",[v._v("当交易发生时，记录该笔交易的区块将进行第一次确认，并在该区块之后的链上的每一个区块进行再次确认；当确认数达到6个及以上时，通常认为这笔交易比较安全并难以篡改。")]),v._v(" "),p("p",[v._v("64.双重交易")]),v._v(" "),p("p",[v._v("就是我有10块钱，我用这10块钱买了一包烟，然后瞬间操作用这还没到付的10块钱又买了杯咖啡。\n所以验证交易的时候，要确认这10块钱是否已花费。")]),v._v(" "),p("p",[v._v("65.UTXO未花费的交易输出")]),v._v(" "),p("p",[v._v("它是一个包含交易数据和执行代码的数据结构，可以理解为存在但尚未消费的数字货币。")]),v._v(" "),p("p",[v._v("66.每秒交易数量TPS")]),v._v(" "),p("p",[v._v("也就是吞吐量，tps指系统每秒能处理的交易数量。")]),v._v(" "),p("h2",{attrs:{id:"钱包相关"}},[p("a",{staticClass:"header-anchor",attrs:{href:"#钱包相关"}},[v._v("#")]),v._v(" 钱包相关")]),v._v(" "),p("p",[v._v("67.钱包")]),v._v(" "),p("p",[v._v("与支付宝类似，用来存储数字货币的，用区块链技术更加安全。")]),v._v(" "),p("p",[v._v("68.冷钱包/热钱包")]),v._v(" "),p("p",[v._v("冷钱包就是离线钱包，原理是储存在本地，运用二维码通信让私钥永不触网。")]),v._v(" "),p("p",[v._v("热钱包就是在线钱包，原理是将私钥加密后存储在服务器上，当需要使用时再从服务器上下载下来，并在浏览器端进行解密。")]),v._v(" "),p("p",[v._v("69.软件钱包/硬件钱包")]),v._v(" "),p("p",[v._v("软件钱包是一种计算机程序。一般而言，软件钱包是与区块链交互的程序，可以让用户接收、存储和发送数字货币，可以存储多个密钥。\n硬件钱包是专门处理数字货币的智能设备。")]),v._v(" "),p("h2",{attrs:{id:"发行相关"}},[p("a",{staticClass:"header-anchor",attrs:{href:"#发行相关"}},[v._v("#")]),v._v(" 发行相关")]),v._v(" "),p("p",[v._v("70.空投")]),v._v(" "),p("p",[v._v("项目方把数字货币发送给各个用户钱包地址。白给")]),v._v(" "),p("p",[v._v("71.映射")]),v._v(" "),p("p",[v._v("映射跟区块链货币的发行相关，是链与链之间的映射。比如有一些区块链公司，前期没有完成链的开发，它就依托于以太坊发行自己的货币，前期货币的发行、交易等都在以太坊上进行操作。随着公司的发展，公司自己的链开发完成了，公司想要把之前在以太坊上的信息全部对应到自己的链上，这个过程就是映射。")]),v._v(" "),p("p",[v._v("72.GOHOST:GHOST协议就是让我们必须选择一个在其上完成计算最多的路径。一个方法确定路径就是使用最近一个区块（叶子区块）的区块号，区块号代表着当前路径上总的区块数（不包含创世纪区块）。区块号越大，路径就会越长，就说明越多的挖矿算力被消耗在此路径上以达到叶子区块。使用这种推理就可以允许我们赞同当前状态的权威版本。")])])}),[],!1,null,null,null);_.default=t.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{548:function(v,_,a){"use strict";a.r(_);var t=a(47),r=Object(t.a)({},(function(){var v=this,_=v.$createElement,a=v._self._c||_;return a("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[a("h2",{attrs:{id:"如何设计一个关系型数据库？⭐"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如何设计一个关系型数据库？⭐"}},[v._v("#")]),v._v(" 如何设计一个关系型数据库？⭐")]),v._v(" "),a("p",[v._v("首先划分为两大部分，一个存储部分，类似文件系统将数据持久化到硬盘上， 另一个是程序实例部分，创建模块： 存储管理，缓存机制，SQL解析，日志管理，权限划分，容灾机制，索引管理，锁模块。")]),v._v(" "),a("h2",{attrs:{id:"数据库的三范式是什么？⭐"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数据库的三范式是什么？⭐"}},[v._v("#")]),v._v(" 数据库的三范式是什么？⭐")]),v._v(" "),a("p",[v._v("第一范式：强调的是列的原子性，即数据库表的每一列都是不可分割的原子数据项。")]),v._v(" "),a("p",[v._v("第二范式：要求实体的属性完全依赖于主关键字。所谓完全依赖是指不能存在仅依赖主关键字一部分的属性。")]),v._v(" "),a("p",[v._v("第三范式：任何非主属性不依赖于其它非主属性。\n")]),v._v(" "),a("h2",{attrs:{id:"事务的基本要素-acid⭐"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#事务的基本要素-acid⭐"}},[v._v("#")]),v._v(" 事务的基本要素 ACID⭐")]),v._v(" "),a("p",[v._v("Atomicity（原子性）：事务是一个原子操作单元，其对数据的修改，要么全都执行，要么全都不执行")]),v._v(" "),a("p",[v._v("Consistency（一致性）：在事务开始之前和事务结束以后，数据库的完整性没有被破坏。")]),v._v(" "),a("p",[v._v("Isolation（隔离性）：同一时间，只允许一个事务请求同一数据，不同的事务之间彼此没有任何干扰。 事务隔离分为不同级别，包括读未提交（Read uncommitted）、读提交（read committed）、可重复读（repeatable read）和串行化（Serializable）。")]),v._v(" "),a("p",[v._v("Durability（持久性）：事务处理结束后，对数据的修改是永久的。")]),v._v(" "),a("h2",{attrs:{id:"char-和-varchar-的区别是什么？⭐"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#char-和-varchar-的区别是什么？⭐"}},[v._v("#")]),v._v(" char 和 varchar 的区别是什么？⭐")]),v._v(" "),a("p",[v._v('char(n) ：固定长度类型，比如订阅 char(10)，当你输入"abc"三个字符的时候，它们占的空间还是 10 个字节，其他 7 个是空字节。')]),v._v(" "),a("p",[v._v("chat 优点：效率高；缺点：占用空间；适用场景：存储密码的 md5 值，固定长度的，使用 char 非常合适。")]),v._v(" "),a("p",[v._v("varchar(n) ：可变长度，存储的值是每个值占用的字节再加上一个用来记录其长度的字节的长度。")]),v._v(" "),a("p",[v._v("所以，从空间上考虑 varcahr 比较合适；从效率上考虑 char 比较合适，二者使用需要权衡。")]),v._v(" "),a("h2",{attrs:{id:"where与having的区别⭐"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#where与having的区别⭐"}},[v._v("#")]),v._v(" where与having的区别⭐")]),v._v(" "),a("blockquote",[a("p",[v._v("用的地方不一样")])]),v._v(" "),a("p",[v._v("where可以用于select、update、delete和insert into values(select * from table where ..)语句中。")]),v._v(" "),a("p",[v._v("having只能用于select语句中")]),v._v(" "),a("blockquote",[a("p",[v._v("执行的顺序不一样\nwhere的搜索条件是在执行语句进行分组之前应用")])]),v._v(" "),a("p",[v._v("having的搜索条件是在分组条件后执行的")]),v._v(" "),a("p",[v._v("即如果where和having一起用时，where会先执行，having后执行")]),v._v(" "),a("h2",{attrs:{id:"数据库的事务隔离-事务隔离级别⭐"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数据库的事务隔离-事务隔离级别⭐"}},[v._v("#")]),v._v(" 数据库的事务隔离/事务隔离级别⭐")]),v._v(" "),a("p",[v._v("可用的配置值：READ-UNCOMMITTED、READ-COMMITTED、REPEATABLE-READ、SERIALIZABLE。")]),v._v(" "),a("p",[v._v("READ-UNCOMMITTED：未提交读，最低隔离级别、事务未提交前，就可被其他事务读取（会出现幻读、脏读、不可重复读）。")]),v._v(" "),a("p",[v._v("READ-COMMITTED：提交读，一个事务提交后才能被其他事务读取到（会造成幻读、不可重复读）。")]),v._v(" "),a("p",[v._v("REPEATABLE-READ：可重复读，mysql默认级别，保证多次读取同一个数据时，其值都和事务开始时候的内容是一致，禁止读取到别的事务未提交的数据（会造成幻读）。")]),v._v(" "),a("p",[v._v("SERIALIZABLE：序列化，代价最高最可靠的隔离级别，该隔离级别能防止脏读、不可重复读、幻读。")]),v._v(" "),a("p",[v._v("在MySQL可重复读的隔离级别中并不是完全解决了幻读的问题，而是解决了读数据情况下的幻读问题。而对于修改的操作依旧存在幻读问题，就是说MVCC对于幻读的解决是不彻底的。 通过next key lock解决了幻读的问题。")]),v._v(" "),a("p",[v._v("Record lock：单个行记录上的锁\nGap lock：间隙锁，锁定一个范围，不包括记录本身\nNext-key lock：record+gap 锁定一个范围，包含记录本身\n补充：")]),v._v(" "),a("p",[v._v("脏读 ：表示一个事务能够读取另一个事务中还未提交的数据。比如，某个事务尝试插入记录 A，此时该事务还未提交，然后另一个事务尝试读取到了记录 A。")]),v._v(" "),a("p",[v._v("不可重复读 ：是指在一个事务内，多次读同一数据数据发生了变化。")]),v._v(" "),a("p",[v._v("幻读 ：指同一个事务内多次查询返回的结果集不一样。比如同一个事务 A 第一次查询时候有 n 条记录，但是第二次同等条件下查询却有 n+1 条记录，这就好像产生了幻觉。发生幻读的原因也是另外一个事务新增或者删除或者修改了第一个事务结果集里面的数据，同一个记录的数据内容被修改了，所有数据行的记录就变多或者变少了。")]),v._v(" "),a("h2",{attrs:{id:"如何解决事务的并发问题⭐"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如何解决事务的并发问题⭐"}},[v._v("#")]),v._v(" 如何解决事务的并发问题⭐")]),v._v(" "),a("h3",{attrs:{id:"版本检查⭐"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#版本检查⭐"}},[v._v("#")]),v._v(" 版本检查⭐")]),v._v(" "),a("p",[v._v("在数据库中保留“版本”字段，跟随数据同时读写，以此判断数据版本。版本可能是时间戳或状态字段。")]),v._v(" "),a("p",[v._v("下例中的 WHERE 子句就实现了简单的版本检查：")]),v._v(" "),a("p",[v._v("UPDATE table SET status = 1 WHERE id=1 AND status = 0;\n版本检查能够作为“乐观锁”，解决更新丢失的问题。")]),v._v(" "),a("h3",{attrs:{id:"共享锁与排它锁⭐"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#共享锁与排它锁⭐"}},[v._v("#")]),v._v(" 共享锁与排它锁⭐")]),v._v(" "),a("blockquote",[a("p",[v._v("共享锁（Shared locks, S-locks）")])]),v._v(" "),a("p",[v._v("基本锁类型之一。加共享锁的对象只允许被当前事务和其他事务读。也称读锁。")]),v._v(" "),a("p",[v._v("能给未加锁和添加了S锁的对象添加S锁。对象可以接受添加多把S锁。")]),v._v(" "),a("blockquote",[a("p",[v._v("排它锁（Exclusive locks, X-locks）")])]),v._v(" "),a("p",[v._v("基本锁类型之一。加排它锁的对象只允许被当前事务读和写。也称独占锁，写锁。")]),v._v(" "),a("p",[v._v("只能给未加锁的对象添加X锁。对象只能接受一把X锁。加X锁的对象不能再加任何锁。")]),v._v(" "),a("h3",{attrs:{id:"更新锁（update-locks-u-locks）⭐"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#更新锁（update-locks-u-locks）⭐"}},[v._v("#")]),v._v(" 更新锁（Update locks, U-locks）⭐")]),v._v(" "),a("p",[v._v("锁类型之一。引入它是因为多数数据库在实现加X锁时是执行了如下流程：先加S锁，添加成功后尝试更换为X锁。这时如果有两个事务同时加了S锁，尝试换X锁，就会发生死锁。因此增加U锁，U锁代表有更新意向，只允许有一个事务拿到U锁，该事务在发生写后U锁变X锁，未写时看做S锁。")]),v._v(" "),a("h3",{attrs:{id:"悲观锁与乐观锁⭐"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#悲观锁与乐观锁⭐"}},[v._v("#")]),v._v(" 悲观锁与乐观锁⭐")]),v._v(" "),a("p",[v._v("这两种锁的说法，主要是对“是否真正在数据库层面加锁”进行讨论。")]),v._v(" "),a("blockquote",[a("p",[v._v("悲观锁（Pessimistic Locking）")])]),v._v(" "),a("p",[v._v("悲观锁假定当前事务操纵数据资源时，肯定还会有其他事务同时访问该数据资源，为了避免当前事务的操作受到干扰，先锁定资源。悲观锁需使用数据库的锁机制实现，如使用行级排他锁或表级排它锁。")]),v._v(" "),a("blockquote",[a("p",[v._v("乐观锁（Optimistic Locking）")])]),v._v(" "),a("p",[v._v("乐观锁假定当前事务操纵数据资源时，不会有其他事务同时访问该数据资源，因此不在数据库层次上的锁定。乐观锁使用由程序逻辑控制的技术来避免可能出现的并发问题。")]),v._v(" "),a("p",[v._v("唯一能够同时保持高并发和高可伸缩性的方法就是使用带版本检查的乐观锁。")]),v._v(" "),a("p",[v._v("乐观锁不能解决脏读的问题，因此仍需要数据库至少启用“读已提交”的事务隔离级别。")]),v._v(" "),a("h2",{attrs:{id:"说一下乐观锁和悲观锁？⭐"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#说一下乐观锁和悲观锁？⭐"}},[v._v("#")]),v._v(" 说一下乐观锁和悲观锁？⭐")]),v._v(" "),a("ol",[a("li",[v._v("乐观锁：每次去拿数据的时候都认为别人不会修改，所以不会上锁，但是在提交更新的时候会判断一下在此期间别人有没有去更新这个数据。")])]),v._v(" "),a("p",[v._v("数据库的乐观锁需要自己实现，在表里面添加一个 version 字段，每次修改成功值加 1，这样每次修改的时候先对比一下，自己拥有的 version 和数据库现在的 version 是否一致，如果不一致就不修改，这样就实现了乐观锁。")]),v._v(" "),a("p",[v._v("（如SVN、GIT提交代码就是这样的）")]),v._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[v._v("悲观锁：每次去拿数据的时候都认为别人会修改，所以每次在拿数据的时候都会上锁，这样别人想拿这个数据就会阻止，直到这个锁被释放。")])]),v._v(" "),a("p",[v._v("一般是 where id=XX for update 来实现 （一般银行转账、工单审批）")]),v._v(" "),a("p",[v._v("优缺点：")]),v._v(" "),a("p",[v._v("乐观锁：性能高、重试失败成本不高建议乐观")]),v._v(" "),a("p",[v._v("悲观锁：性能低，但安全，失败成功高建议悲观，使用不当有死锁风险")]),v._v(" "),a("h2",{attrs:{id:"多版本并发控制-mvcc-⭐"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#多版本并发控制-mvcc-⭐"}},[v._v("#")]),v._v(" 多版本并发控制(MVCC)⭐")]),v._v(" "),a("p",[v._v("(Multi-Version Concurrency Control)")]),v._v(" "),a("p",[v._v("可以认为MVCC是行级锁的一个变种，innoDB采用了乐观锁的策略，在每行记录后保存两个隐藏列来实现，这两个列保存了行的版本号信息，每开启一个新事务，版本号自动更新，事务开始时刻的版本号作为事务的版本号。用来和查询到的记录所带的版本号进行比较来判断。")]),v._v(" "),a("h2",{attrs:{id:"mysql逻辑架构和执行流程？⭐"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mysql逻辑架构和执行流程？⭐"}},[v._v("#")]),v._v(" MySQL逻辑架构和执行流程？⭐")]),v._v(" "),a("p",[v._v("最上层的服务类似其他CS结构，比如连接处理，授权处理。")]),v._v(" "),a("p",[v._v("第二层是Mysql的服务层，包括SQL的解析分析优化，存储过程触发器视图等也在这一层实现。")]),v._v(" "),a("p",[v._v("最后一层是存储引擎的实现。")]),v._v(" "),a("h2",{attrs:{id:"说一下-mysql-常用的引擎？⭐"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#说一下-mysql-常用的引擎？⭐"}},[v._v("#")]),v._v(" 说一下 mysql 常用的引擎？⭐")]),v._v(" "),a("p",[v._v("InnoDB 引擎：MySQL 的5.5之后的默认引擎，InnoDB 引擎提供了对数据库事务的支持，并且还提供了行级锁和外键的约束，它的设计的目标就是处理大数据容量的数据库系统。MySQL 运行的时候，InnoDB 会在内存中建立缓冲池，用于缓冲数据和索引。由于锁的粒度小，写操作是不会锁定全表的,所以在并发度较高的场景下使用会提升效率的。")]),v._v(" "),a("p",[v._v("MyISAM 引擎：不提供事务的支持，也不支持行级锁和外键。因此当执行插入和更新语句时，即执行写操作的时候需要锁定这个表，所以会导致效率会降低。不过和 InnoDB 不同的是，MyIASM 引擎是保存了表的行数，于是当进行 select count(*) from table 语句时，可以直接的读取已经保存的值而不需要进行扫描全表。所以，如果表的读操作远远多于写操作时，并且不需要事务的支持的，可以将 MyIASM 作为数据库引擎的首选。")]),v._v(" "),a("h2",{attrs:{id:"myisam和innodb的区别⭐"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#myisam和innodb的区别⭐"}},[v._v("#")]),v._v(" Myisam和InnoDB的区别⭐")]),v._v(" "),a("p",[v._v("是否支持行级锁 : MyISAM 只有表级锁(table-level locking)，而InnoDB 支持行级锁(row-level locking)和表级锁,默认为行级锁，适合高并发操作。")]),v._v(" "),a("p",[v._v("是否支持外键： MyISAM不支持，而InnoDB支持")]),v._v(" "),a("p",[v._v("是否支持事务：MyISAM不支持，而InnoDB支持")]),v._v(" "),a("p",[v._v("缓存：MyISAM只缓存索引，InnoDB缓存索引和真实数据，所以对内存要求高")]),v._v(" "),a("p",[v._v("崩溃恢复：MyISAM 崩溃后发生损坏的概率比 InnoDB 高很多，而且恢复的速度也更慢。")]),v._v(" "),a("h2",{attrs:{id:"mysql-索引是怎么实现的？⭐"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mysql-索引是怎么实现的？⭐"}},[v._v("#")]),v._v(" mysql 索引是怎么实现的？⭐")]),v._v(" "),a("p",[v._v("索引是满足某种特定查找算法的数据结构，而这些数据结构会以某种方式指向数据，从而实现高效查找数据。 MySQL 中的索引，不同的数据引擎实现有所不同，但目前主流的数据库引擎的索引都是 B+ 树实现的 。")]),v._v(" "),a("h2",{attrs:{id:"b树和b-树的概念和区别⭐"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#b树和b-树的概念和区别⭐"}},[v._v("#")]),v._v(" B树和B+树的概念和区别⭐")]),v._v(" "),a("p",[v._v("1）B-树的关键字和记录是放在一起的，叶子节点可以看作外部节点，不包含任何信息；B+树的非叶子节点中只有关键字和指向下一个节点的索引，记录只放在叶子节点中。 2）在B-树中，越靠近根节点的记录查找时间越快，只要找到关键字即可确定记录的存在；而B+树中每个记录的查找时间基本是一样的，都需要从根节点走到叶子节点，而且在叶子节点中还要再比较关键字。从这个角度看B-树的性能好像要比B+树好，而在实际应用中却是B+树的性能要好些。")]),v._v(" "),a("h2",{attrs:{id:"为什么选择b-树作为索引结构⭐"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#为什么选择b-树作为索引结构⭐"}},[v._v("#")]),v._v(" 为什么选择B+树作为索引结构⭐")]),v._v(" "),a("p",[v._v("因为B+树的非叶子节点不存放实际的数据，这样每个节点可容纳的元素个数比B-树多，树高比B-树小，这样带来的好处是减少磁盘访问次数。尽管B+树找到一个记录所需的比较次数要比B-树多，但是一次磁盘访问的时间相当于成百上千次内存比较的时间，因此实际中B+树的性能可能还会好些。")]),v._v(" "),a("p",[v._v("B+树的叶子节点使用指针连接在一起，方便顺序遍历（例如查看一个目录下的所有文件，一个表中的所有记录等）。")]),v._v(" "),a("p",[v._v("B+树的查询效率更加稳定，每次查询的效率一样。")]),v._v(" "),a("p",[v._v("Hash索引底层是哈希表，哈希表是一种以key-value存储数据的结构，所以多个数据在存储关系上是完全没有任何顺序关系的，所以，对于区间查询是无法直接通过索引查询的，就需要全表扫描。所以，哈希索引只适用于等值查询的场景。而B+ 树是一种多路平衡查询树，所以他的节点是天然有序的（左子节点小于父节点、父节点小于右子节点），所以对于范围查询的时候不需要做全表扫描")]),v._v(" "),a("p",[v._v("二叉查找树：解决了排序的基本问题，但是由于无法保证平衡，可能退化为链表。")]),v._v(" "),a("p",[v._v("平衡二叉树：通过旋转解决了平衡的问题，但是旋转操作效率太低。")]),v._v(" "),a("p",[v._v("红黑树：通过舍弃严格的平衡和引入红黑节点，解决了 AVL旋转效率过低的问题，但是在磁盘等场景下，树仍然太高，IO次数太多。")]),v._v(" "),a("h2",{attrs:{id:"b-树的叶子节点都可以存哪些东西⭐"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#b-树的叶子节点都可以存哪些东西⭐"}},[v._v("#")]),v._v(" B+树的叶子节点都可以存哪些东西⭐")]),v._v(" "),a("p",[v._v("可能存储的是整行数据，也有可能是主键的值")]),v._v(" "),a("h2",{attrs:{id:"b-树和-b-树的概念和区别⭐"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#b-树和-b-树的概念和区别⭐"}},[v._v("#")]),v._v(" B 树和 B + 树的概念和区别⭐")]),v._v(" "),a("p",[v._v("1）B - 树的关键字和记录是放在一起的，叶子节点可以看作外部节点，不包含任何信息；B + 树的非叶子节点中只有关键字和指向下一个节点的索引，记录只放在叶子节点中。 2）在 B - 树中，越靠近根节点的记录查找时间越快，只要找到关键字即可确定记录的存在；而 B + 树中每个记录的查找时间基本是一样的，都需要从根节点走到叶子节点，而且在叶子节点中还要再比较关键字。从这个角度看 B - 树的性能好像要比 B + 树好，而在实际应用中却是 B + 树的性能要好些。")]),v._v(" "),a("p",[v._v("原因：")]),v._v(" "),a("p",[v._v("因为 B + 树的非叶子节点不存放实际的数据，这样每个节点可容纳的元素个数比 B - 树多，树高比 B - 树小，这样带来的好处是减少磁盘访问次数。尽管 B + 树找到一个记录所需的比较次数要比 B - 树多，但是一次磁盘访问的时间相当于成百上千次内存比较的时间，因此实际中 B + 树的性能可能还会好些。\nB + 树的叶子节点使用指针连接在一起，方便顺序遍历（例如查看一个目录下的所有文件，一个表中的所有记录等）。\nB + 树的查询效率更加稳定，每次查询的效率一样。\n哈希索引")]),v._v(" "),a("p",[v._v("对于哈希索引来说，底层的数据结构就是哈希表，因此在绝大多数需求为单条记录查询的时候，可以选择哈希索引，查询性能最快；其余大部分场景，建议选择BTree索引。")]),v._v(" "),a("h2",{attrs:{id:"什么样的信息能成为索引⭐"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么样的信息能成为索引⭐"}},[v._v("#")]),v._v(" 什么样的信息能成为索引⭐")]),v._v(" "),a("p",[v._v("主键，唯一键，普通键都可，只要能让数据有一定区分性的字段。")]),v._v(" "),a("h2",{attrs:{id:"聚簇索引⭐"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#聚簇索引⭐"}},[v._v("#")]),v._v(" 聚簇索引⭐")]),v._v(" "),a("p",[v._v("聚簇索引：将数据存储与索引放到了一块，找到索引也就找到了数据")]),v._v(" "),a("p",[v._v("非聚簇索引：将数据存储金和索引分开的结构，索引结构的叶子节点指向了数据的对应行")]),v._v(" "),a("p",[v._v("聚簇索引具有唯一性， 一个表仅有一个聚簇索引 。")]),v._v(" "),a("p",[v._v("聚簇索引默认是主键，如果表中没有定义主键，InnoDB 会选择一个唯一的非空索引代替。如果没有这样的索引，InnoDB 会隐式定义一个主键来作为聚簇索引。")]),v._v(" "),a("p",[v._v("聚簇索引和非聚簇索引类似查字典时直接根据经验查字的大概位置和先去查偏旁部首再去翻页查询类似。")]),v._v(" "),a("p",[v._v("MyISAM没有聚簇索引，都是二级索引。")]),v._v(" "),a("p",[v._v("优点:")]),v._v(" "),a("ol",[a("li",[a("p",[v._v("把相关数据保存在一起，减少了磁盘I/O。")])]),v._v(" "),a("li",[a("p",[v._v("数据访问更快。")])])]),v._v(" "),a("h2",{attrs:{id:"覆盖索引⭐"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#覆盖索引⭐"}},[v._v("#")]),v._v(" 覆盖索引⭐")]),v._v(" "),a("p",[v._v("指一个查询语句的执行只用从索引中就能够取得，不必从数据表中读取。也可以称之为实现了索引覆盖。")]),v._v(" "),a("h2",{attrs:{id:"最佳左前缀法则⭐"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#最佳左前缀法则⭐"}},[v._v("#")]),v._v(" 最佳左前缀法则⭐")]),v._v(" "),a("p",[v._v("指的是查询从索引的最左前列开始并且不跳过索引中的列。 在创建索引的字段中第一个就是最左，每个左边的字段都是后面一个字段的一整个树，过滤条件要使用索引必须按照索引建立时的顺序，依次满足，一旦跳过某个字段，索引后面的字段都无法被使用。要按照顺序命中索引")]),v._v(" "),a("p",[v._v("如果索引了多列，要遵守最左前缀法则。指的是查询一定要从索引的最左前列开始并且不跳过索引中的列。如果查询中有某个列的范围查询，则其右边的所有列都无法使用索引。 在创建索引的字段中第一个就是最左，每个左边的字段都是后面一个字段的一整个树，过滤条件要使用索引必须按照索引建立时的顺序，依次满足，一旦跳过某个字段，索引后面的字段都无法被使用。即要按照顺序命中索引。")]),v._v(" "),a("h2",{attrs:{id:"mysql-问题排查都有哪些手段？⭐"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mysql-问题排查都有哪些手段？⭐"}},[v._v("#")]),v._v(" mysql 问题排查都有哪些手段？⭐")]),v._v(" "),a("p",[v._v("使用 show processlist 命令查看当前所有连接信息。\n使用 explain 命令查询 SQL 语句执行计划。\n开启慢查询日志，查看慢查询的 SQL。")]),v._v(" "),a("h2",{attrs:{id:"为什么使用索引能提高效率⭐"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#为什么使用索引能提高效率⭐"}},[v._v("#")]),v._v(" 为什么使用索引能提高效率⭐")]),v._v(" "),a("ul",[a("li",[v._v("数据索引的存储是有序的")]),v._v(" "),a("li",[v._v("在有序的情况下，通过索引查询一个数据是无需遍历索引记录的")]),v._v(" "),a("li",[v._v("极端情况下，数据索引的查询效率为二分法查询效率，趋近于 log2(N)")]),v._v(" "),a("li",[v._v("避免全表扫描")])]),v._v(" "),a("h2",{attrs:{id:"为什么要使用索引？⭐"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#为什么要使用索引？⭐"}},[v._v("#")]),v._v(" 为什么要使用索引？⭐")]),v._v(" "),a("ul",[a("li",[v._v("通过创建唯一性索引，可以保证数据库表中每一行数据的唯一性。")]),v._v(" "),a("li",[v._v("可以大大加快 数据的检索速度（大大减少的检索的数据量）, 这也是创建索引的最主要的原因。")]),v._v(" "),a("li",[v._v("帮助服务器避免排序和临时表")]),v._v(" "),a("li",[v._v("将随机IO变为顺序IO")])]),v._v(" "),a("h2",{attrs:{id:"索引的优点⭐"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#索引的优点⭐"}},[v._v("#")]),v._v(" 索引的优点⭐")]),v._v(" "),a("ul",[a("li",[v._v("大大减少了服务器需要扫描的数据行数。")]),v._v(" "),a("li",[v._v("帮助服务器避免进行排序和分组，以及避免创建临时表（B+Tree 索引是有序的，可以用于 ORDER BY 和 GROUP BY 操作。临时表主要是在排序和分组过程中创建，不需要排序和分组，也就不需要创建临时表）。")]),v._v(" "),a("li",[v._v("将随机 I/O 变为顺序 I/O（B+Tree 索引是有序的，会将相邻的数据都存储在一起）。")])]),v._v(" "),a("h2",{attrs:{id:"什么情况下应不建或少建索引⭐"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么情况下应不建或少建索引⭐"}},[v._v("#")]),v._v(" 什么情况下应不建或少建索引⭐")]),v._v(" "),a("ul",[a("li",[v._v("非常小的表")]),v._v(" "),a("li",[v._v("非常大的表，建议使用分区技术")]),v._v(" "),a("li",[v._v("经常插入、删除、修改的表")]),v._v(" "),a("li",[v._v("数据重复且分布平均的表字段")])]),v._v(" "),a("h2",{attrs:{id:"索引优化⭐"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#索引优化⭐"}},[v._v("#")]),v._v(" 索引优化⭐")]),v._v(" "),a("h3",{attrs:{id:"独立的列⭐"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#独立的列⭐"}},[v._v("#")]),v._v(" 独立的列⭐")]),v._v(" "),a("p",[v._v("在进行查询时，索引列不能是表达式的一部分，也不能是函数的参数，否则无法使用索引。")]),v._v(" "),a("p",[v._v("例如下面的查询不能使用 actor_id 列的索引：")]),v._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[v._v("SELECT actor_id FROM sakila.actor WHERE actor_id + 1 = 5;\n")])]),v._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[v._v("1")]),a("br")])]),a("h3",{attrs:{id:"多列索引⭐"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#多列索引⭐"}},[v._v("#")]),v._v(" 多列索引⭐")]),v._v(" "),a("p",[v._v("在需要使用多个列作为条件进行查询时，使用多列索引比使用多个单列索引性能更好。例如下面的语句中，最好把 actor_id 和 film_id 设置为多列索引。")]),v._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[v._v("SELECT film_id, actor_ id FROM sakila.film_actor\nWHERE actor_id = 1 AND film_id = 1;\n")])]),v._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[v._v("1")]),a("br"),a("span",{staticClass:"line-number"},[v._v("2")]),a("br")])]),a("h3",{attrs:{id:"前缀索引⭐"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前缀索引⭐"}},[v._v("#")]),v._v(" 前缀索引⭐")]),v._v(" "),a("p",[v._v("对于 BLOB、TEXT 和 VARCHAR 类型的列，必须使用前缀索引，只索引开始的部分字符。")]),v._v(" "),a("p",[v._v("前缀长度的选取需要根据索引选择性来确定。")]),v._v(" "),a("h3",{attrs:{id:"多列索引⭐-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#多列索引⭐-2"}},[v._v("#")]),v._v(" 多列索引⭐")]),v._v(" "),a("p",[v._v("在需要使用多个列作为条件进行查询时，使用多列索引比使用多个单列索引性能更好。例如下面的语句中，最好把 actor_id 和 film_id 设置为多列索引。")]),v._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[v._v("SELECT film_id, actor_ id FROM sakila.film_actor\nWHERE actor_id = 1 AND film_id = 1;\n")])]),v._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[v._v("1")]),a("br"),a("span",{staticClass:"line-number"},[v._v("2")]),a("br")])]),a("h3",{attrs:{id:"索引列的顺序⭐"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#索引列的顺序⭐"}},[v._v("#")]),v._v(" 索引列的顺序⭐")]),v._v(" "),a("p",[v._v("让选择性最强的索引列放在前面。")]),v._v(" "),a("p",[v._v("索引的选择性是指：不重复的索引值和记录总数的比值。最大值为 1，此时每个记录都有唯一的索引与其对应。选择性越高，每个记录的区分度越高，查询效率也越高。")]),v._v(" "),a("h3",{attrs:{id:"聚簇索引⭐-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#聚簇索引⭐-2"}},[v._v("#")]),v._v(" 聚簇索引⭐")]),v._v(" "),a("p",[v._v("聚簇索引：将数据存储与索引放到了一块，找到索引也就找到了数据")]),v._v(" "),a("p",[v._v("非聚簇索引：将数据存储于索引分开结构，索引结构的叶子节点指向了数据的对应行")]),v._v(" "),a("p",[v._v("聚簇索引具有唯一性， 聚簇索引是将数据跟索引结构放到一块，因此一个表仅有一个聚簇索引 。")]),v._v(" "),a("p",[v._v("聚簇索引默认是主键，如果表中没有定义主键，InnoDB 会选择一个唯一的非空索引代替。如果没有这样的索引，InnoDB 会隐式定义一个主键来作为聚簇索引。")]),v._v(" "),a("p",[v._v("聚簇索引和非聚簇索引类似查字典时直接根据经验查字的大概位置和先去查偏旁部首再去翻页查询类似。")]),v._v(" "),a("p",[v._v("MyISAM没有聚簇索引，都是二级索引。")]),v._v(" "),a("p",[v._v("优点:")]),v._v(" "),a("ul",[a("li",[v._v("把相关数据保存在一起，减少了磁盘I/O。")]),v._v(" "),a("li",[v._v("数据访问更快。")])]),v._v(" "),a("h3",{attrs:{id:"覆盖索引⭐-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#覆盖索引⭐-2"}},[v._v("#")]),v._v(" 覆盖索引⭐")]),v._v(" "),a("p",[v._v("如果一个索引包含（或者说覆盖）所有需要查询的字段的值，我们就称 之为“覆盖索引”。我们知道在InnoDB存储引擎中，如果不是主键索引，叶子节点存储的是主键+列值。最终还是要“回表”，也就是要通过主键再查找一次。这样就会比较慢 覆盖索引就是把要查询出的列和索引是对应的，不做回表操作。")]),v._v(" "),a("h2",{attrs:{id:"索引的使用经验⭐"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#索引的使用经验⭐"}},[v._v("#")]),v._v(" 索引的使用经验⭐")]),v._v(" "),a("ul",[a("li",[v._v("在经常需要搜索的列上，可以加快搜索的速度；")]),v._v(" "),a("li",[v._v("在经常使用在WHERE子句中的列上面创建索引，加快条件的判断速度。")]),v._v(" "),a("li",[v._v("在经常需要排序的列上创 建索引，因为索引已经排序，这样查询可以利用索引的排序，加快排序查询时间；")]),v._v(" "),a("li",[v._v("对于中到大型表索引都是非常有效的，但是特大型表的话维护开销会很大，不适合建索引")]),v._v(" "),a("li",[v._v("在经常用在连接的列上，这些列主要是一些外键，可以加快连接的速度；")]),v._v(" "),a("li",[v._v("避免 where 子句中对宇段施加函数，这会造成无法命中索引。")]),v._v(" "),a("li",[v._v("在使用InnoDB时使用与业务无关的自增主键作为主键，即使用逻辑主键，而不要使用业务主键。")]),v._v(" "),a("li",[v._v("将打算加索引的列设置为 NOT NULL ，否则将导致引擎放弃使用索引而进行全表扫描")]),v._v(" "),a("li",[v._v("删除长期未使用的索引，不用的索引的存在会造成不必要的性能损耗")]),v._v(" "),a("li",[v._v("在使用 limit offset 查询缓慢时，可以借助索引来提高性能")])]),v._v(" "),a("h2",{attrs:{id:"并发控制⭐"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#并发控制⭐"}},[v._v("#")]),v._v(" 并发控制⭐")]),v._v(" "),a("p",[v._v("表级锁： MySQL中锁定 粒度最大 的一种锁，对当前操作的整张表加锁，实现简单，资源消耗也比较少，加锁快，不会出现死锁。其锁定粒度最大，触发锁冲突的概率最高，并发度最低，MyISAM和 InnoDB引擎都支持表级锁。")]),v._v(" "),a("p",[v._v("行级锁： MySQL中锁定 粒度最小 的一种锁，只针对当前操作的行进行加锁。 行级锁能大大减少数据库操作的冲突。其加锁粒度最小，并发度高，但加锁的开销也最大，加锁慢，会出现死锁。")]),v._v(" "),a("h2",{attrs:{id:"性能分析的重点字段⭐"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#性能分析的重点字段⭐"}},[v._v("#")]),v._v(" 性能分析的重点字段⭐")]),v._v(" "),a("h3",{attrs:{id:"type⭐"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#type⭐"}},[v._v("#")]),v._v(" type⭐")]),v._v(" "),a("p",[v._v("type显示的是访问类型 system>const>eq_ref>ref>range>index>ALL,一般来说，得保证查询至少达到range级别，最好能达到ref。")]),v._v(" "),a("p",[v._v("三个较差情况：")]),v._v(" "),a("p",[v._v("1.range： 只检索给定范围的行,使用一个索引来选择行。key 列显示使用了哪个索引 一般就是在你的where语句中出现了between、<、>、in等的查询 这种范围扫描索引扫描比全表扫描要好，因为它只需要开始于索引的某一点，而结束语另一点，不用扫描全部索引。")]),v._v(" "),a("p",[v._v("2.index： 出现index是sql使用了索引但是没用通过索引进行过滤，一般是使用了覆盖索引或者是利用索引进行了排序分组 ，一般是where后面没有优化索引")]),v._v(" "),a("p",[v._v("3.all（最差）： Full Table Scan，将遍历全表以找到匹配的行")]),v._v(" "),a("p",[v._v("备注：一般来说，得保证查询至少达到range级别，最好能达到ref。")]),v._v(" "),a("h3",{attrs:{id:"extra⭐"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#extra⭐"}},[v._v("#")]),v._v(" Extra⭐")]),v._v(" "),a("p",[v._v("包含不适合在其他列中显示但十分重要的额外信息，主要用来检测 order by，group by或者关联查询是否使用了索引。 有以下几种情况： 1.Using filesort 2.Using temporary 3.using join buffer都是很差的是使用方式。要建立索引。 4.impossible where：不可能出现的情况，一般为 逻辑出现错误。 5.USING index： 利用索引进行了排序或分组， 表示相应的select操作中使用了覆盖索引(Covering Index)，避免访问了表的数据行，效率不错！ 如果同时出现using where，表明索引被用来执行索引键值的查找; 如果没有同时出现using where，表明索引只是用来读取数据而非利用索引执行查找。")]),v._v(" "),a("ul",[a("li",[v._v("模糊查询 %like")]),v._v(" "),a("li",[v._v("索引列参与计算,使用了函数")]),v._v(" "),a("li",[v._v("非最左前缀顺序")]),v._v(" "),a("li",[v._v("where对null判断")]),v._v(" "),a("li",[v._v("where不等于")]),v._v(" "),a("li",[v._v("or操作有至少一个字段没有索引")]),v._v(" "),a("li",[v._v("需要回表的查询结果集过大（超过配置的范围）")])]),v._v(" "),a("h2",{attrs:{id:"sql-优化可以从哪些方面考虑？⭐"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sql-优化可以从哪些方面考虑？⭐"}},[v._v("#")]),v._v(" sql 优化可以从哪些方面考虑？⭐")]),v._v(" "),a("p",[v._v("主要是从怎么合理创建索引 合理使用索引以防止索引失效 合理创建表字段这3个方面入手")]),v._v(" "),a("p",[v._v("合理创建索引：对查询进行优化，要尽量避免全表扫描，首先应考虑在 where 及 order by 涉及的列上建立索引。")]),v._v(" "),a("p",[v._v("防止索引失效：参考上一个问题的答案")]),v._v(" "),a("p",[v._v("合理创建表字段： 最好不要给数据库留NULL，尽可能的使用 NOT NULL填充数据库")]),v._v(" "),a("p",[v._v("不使用 *，使用 LIMIT 语句来限制返回的数据")]),v._v(" "),a("p",[v._v("减少交互次数（批量提交）")]),v._v(" "),a("h2",{attrs:{id:"批量往mysql导入1000万数据方法⭐"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#批量往mysql导入1000万数据方法⭐"}},[v._v("#")]),v._v(" 批量往mysql导入1000万数据方法⭐")]),v._v(" "),a("ul",[a("li",[v._v("减少IO次数")]),v._v(" "),a("li",[v._v("SQL写法优化，一条SQL语句插入多条数据")]),v._v(" "),a("li",[v._v("合理设置批量大小")]),v._v(" "),a("li",[v._v("尽量顺序插入， 减少索引的维护压力")])]),v._v(" "),a("h2",{attrs:{id:"redolog-undolog-binlog⭐"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#redolog-undolog-binlog⭐"}},[v._v("#")]),v._v(" redolog,undolog,binlog⭐")]),v._v(" "),a("p",[v._v("undoLog 也就是我们常说的回滚日志文件 主要用于事务中执行失败，进行回滚，以及MVCC中对于数据历史版本的查看。由引擎层的InnoDB引擎实现,是逻辑日志,记录数据修改被修改前的值,比如\"把id='B' 修改为id = 'B2' ，那么undo日志就会用来存放id ='B'的记录”。当一条数据需要更新前,会先把修改前的记录存储在undolog中,如果这个修改出现异常,,则会使用undo日志来实现回滚操作,保证事务的一致性。当事务提交之后，undo log并不能立马被删除,而是会被放到待清理链表中,待判断没有事物用到该版本的信息时才可以清理相应undolog。它保存了事务发生之前的数据的一个版本，用于回滚，同时可以提供多版本并发控制下的读（MVCC），也即非锁定读。")]),v._v(" "),a("p",[v._v("redoLog 是重做日志文件是记录数据修改之后的值，用于持久化到磁盘中。redo log包括两部分：一是内存中的日志缓冲(redo log buffer)，该部分日志是易失性的；二是磁盘上的重做日志文件(redo log file)，该部分日志是持久的。由引擎层的InnoDB引擎实现,是物理日志,记录的是物理数据页修改的信息,比如“某个数据页上内容发生了哪些改动”。当一条数据需要更新时,InnoDB会先将数据更新，然后记录redoLog 在内存中，然后找个时间将redoLog的操作执行到磁盘上的文件上。不管是否提交成功我都记录，你要是回滚了，那我连回滚的修改也记录。它确保了事务的持久性。")]),v._v(" "),a("p",[v._v("binlog由Mysql的Server层实现,是逻辑日志,记录的是sql语句的原始逻辑，比如\"把id='B' 修改为id = ‘B2’。binlog会写入指定大小的物理文件中,是追加写入的,当前文件写满则会创建新的文件写入。 产生:事务提交的时候,一次性将事务中的sql语句,按照一定的格式记录到binlog中。用于复制和恢复在主从复制中，从库利用主库上的binlog进行重播(执行日志中记录的修改逻辑),实现主从同步。业务数据不一致或者错了，用binlog恢复。")]),v._v(" "),a("h2",{attrs:{id:"binlog和redolog的区别⭐"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#binlog和redolog的区别⭐"}},[v._v("#")]),v._v(" binlog和redolog的区别⭐")]),v._v(" "),a("p",[v._v("redolog是在InnoDB存储引擎层产生，而binlog是MySQL数据库的上层服务层产生的。")]),v._v(" "),a("p",[v._v("两种日志记录的内容形式不同。MySQL的binlog是逻辑日志，其记录是对应的SQL语句。而innodb存储引擎层面的重做日志是物理日志。")]),v._v(" "),a("p",[v._v("两种日志与记录写入磁盘的时间点不同，binlog日志只在事务提交完成后进行一次写入。而innodb存储引擎的重做日志在事务进行中不断地被写入，并日志不是随事务提交的顺序进行写入的。")]),v._v(" "),a("p",[v._v("binlog不是循环使用，在写满或者重启之后，会生成新的binlog文件，redolog是循环使用。")]),v._v(" "),a("p",[v._v("binlog可以作为恢复数据使用，主从复制搭建，redolog作为异常宕机或者介质故障后的数据恢复使用。")])])}),[],!1,null,null,null);_.default=r.exports}}]);
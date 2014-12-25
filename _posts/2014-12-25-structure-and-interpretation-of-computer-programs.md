---
layout: post
title: "Structure and Interpretation of Computer Programs"
description: ""
category: technology
tags: [sicp, computer, methodology]
---
{% include JB/setup %}

<div align="center">
<img src="http://img5.douban.com/lpic/s1113106.jpg" />
</div>



  以前一直认为*Structure and Interpretation of Computer Programs*这本书是讲lisp的，但是最近真正领悟到了它对于程序构造方法的思想总领的重要性。
  
  
  最近有个作业是写指令级并行的Tomasula算法的模拟器。Tomasula算法大致分为issue、execute和writeCDB三个阶段，由于资源有限和相关关系，下一条指令的状态会被前面的指令所约束，而指令不同状态的完成又会导致其它指令状态的改变。
  
  
  这非常类似于sicp里可变数据抽象一节，模拟了数字电路的方法。即维护一个时刻表，根据表里不同时刻的待办事项的执行触发相应的任务。想想都兴奋。按照这种想法写完真是太棒了！
  
  
  其实我一直很在意sicp里流的思想。如果指令流能够统一成一样的流而不是单纯的流水线的话，就可以大大提高CPU的效率了，也不需要繁琐的各种并行优化算法了。
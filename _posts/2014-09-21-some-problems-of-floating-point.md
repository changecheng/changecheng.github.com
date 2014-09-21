---
layout: post
title: "Some Problems of Floating Point"
description: "Introduce an amazing website of IEEE 754 fp converter"
category: technology
tags: [floating point, IEEE 754, Converter]
---
{% include JB/setup %}



  最近，在学习CS61C时，讲到了浮点数。老师提到了0的IEEE 754表示方法，就是当指数部分和小数部分均为0的时候，默认为0。这下我可纠结了，那1.0呢，按道理不也是指数和小数均为0么。毕竟1.0 = (-1)^0 * (1+ 0.0) * 2^0。于是到处找原因，最终发现了一个神器。


  [Harald Schmidt](http://http://www.h-schmidt.net)的[IEEE 754 Converter](http://http://www.h-schmidt.net/FloatConverter/IEEE754.html)简单直接地解决了所有问题。
  
  
0.0


![image](/media/pic/fp/0.0.png)


1.0


![image](/media/pic/fp/1.0.png)


infinity


![image](/media/pic/fp/infinity.png)



  所以，我犯的错是没有考虑到老师所说的阶码已经是以127为bias的移码了。即，阶码为0，小数为0时，是0.0；阶码为127，小数为0时，是1.0；阶码为255，小数为0时，是无穷大；而阶码为255，小数不为0时，是NaN。
  
  
  当然，这顺便也解释了为什么bias是127。因为8位unsigned integer可以表示0~255，除去0和255，剩余1~254用来表示。0.0对应阶码实际为2^(-127)，infinity对应为2^128。于是1~254对应于-126~127，自然，偏移值是127。

---
layout: post
title: "Object.create() vs new"
description: ""
category: technology
tags: [object.create(),new]
---
{% include JB/setup %}


最近在看You don't know JS: this and object prototypes一书，看到原型链继承还是不大清晰，于是找了一些资料，特别是关于Object.create()方法和new Constructer()的区别。


Object.create(OBJ):

1. create new Object() obj
2. set obj.__proto__ to OBJ
3. return obj;


new Constructor():

1. create new Object() obj
2. set obj.__proto__ to Constructor.prototype
3. return Constructor.call(obj) || obj;


Object.create()方法主要是原型链继承，不会有new方法Constructor执行带来的副作用。
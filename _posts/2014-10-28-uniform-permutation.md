---
layout: post
title: "Uniform Permutation"
description: "an algorithm to create a uniform permutation"
category: technology
tags: [uniform,permutation,proof]
---
{% include JB/setup %}

This semester, I attend a course of Practical Optimization Algorithm Design. When talking about Hill Climbing algorithm, in the PPT, there is a segment of code about creating an initialized permutation as the first condition. But it made something wrong.


The right code can be located in Introduction to Algorithms from page.127. Here, I just paste the content.


    RANDOMIZE-IN-PLACE(A)


	
	























[1, 3, 2]	5


[2, 1, 3]	5


[2, 3, 1]	5


[3, 1, 2]	4


[3, 2, 1]	4



and the frequency of each permutation is not the same.

This simple disproof can be referenced by [newdye](http://blog.csdn.net/newdye/article/details/16827089)'s blog.

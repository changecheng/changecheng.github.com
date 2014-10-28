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


    RANDOMIZE-IN-PLACE(A)	1 n = A.length	2 for i = 1 to n	3 	swap A[i] with A[RANDOM(i,n)]
	
	We shall use a loop invariant to show that procedure RANDOMIZE-IN-PLACE produces a uniform random permutation. A k-permutation on a set of n elements is a sequence containing k of the n elements, with no repetitions. There are n!/(n-k)! such possible k-permutations.
	
	**Proof**
We use the following loop invariant:
  Just prior to the ith iteration of the for loop of lines 2–3, for each possible (i-1)-permutation of the n elements, the subarray A[1..i-1] contains this (i-1)-permutation with probability (n-i+1)!/n!.
  
  We need to show that this invariant is true prior to the first loop iteration, that each iteration of the loop maintains the invariant, and that the invariant provides a useful property to show correctness when the loop terminates.
**Initialization:** Consider the situation just before the first loop iteration, so that i = 1. The loop invariant says that for each possible 0-permutation, the sub- array A[1..0] contains this 0-permutation with probability (n-i+1)!/n! = n!/n! = 1. The subarray A[1..0] is an empty subarray, and a 0-permutation has no elements. Thus, A[1..0] contains any 0-permutation with probability 1, and the loop invariant holds prior to the first iteration.
**Maintenance:** We assume that just before the ith iteration, each possible (i-1)-permutation appears in the subarray A[1..i-1] with probability (n-i+1)!/n!, and we shall show that after the ith iteration, each possible i-permutation appears in the subarray A[1..i] with probability (n-i)!/n!. Incrementing i for the next iteration then maintains the loop invariant.
Let us examine the ith iteration. Consider a particular i-permutation, and denote the elements in it by <x1,x2,...,xi>. This permutation consists of an (i-1)-permutation <x1,...,xi-1> followed by the value xi that the algorithm places in A[i]. Let E1 denote the event in which the first i-1 iterations have created the particular (i-1)-permutation <x1,...xi-1> in A[1..i-1]. By the loop invariant, Pr{E1} = (n-i+1)!/n!. Let E2 be the event that ith iteration puts xi in position A[i]. The i-permutation <x1,...xi> appears in A[1..i] precisely when both E1 and E2 occur, and so we wish to compute Pr{E2 ∩ E1}. We have
Pr{E2 ∩ E1} = Pr{E2 | E1}Pr{E1}
The probability Pr{E2 ∩ E1} equals 1/(n-i+1) because in line3 the algorithm chooses xi randomly from the n-i+1 values in positions A[i..n].Thus,we have
	Pr{E2 ∩ E1} = Pr{E2 | E1}Pr{E1}
	        	= 1/(n-i+1) * (n-i+1)!/n!
	        	= (n-i)!/n!

**Termination:** At termination, i = n + 1, and we have that the subarray A[1..n] is a given n-permutation with probability (n-(n+1)+1)/n! = 0!/n! = 1/n!. 
Thus, RANDOMIZE-IN-PLACE produces a uniform random permutation.
The above algorithm is the right one while the following one is not uniform:
	PERMUTE-WITH-ALL(A)	1 n = A.length	2 for i = 1 to n	3 	swap A[i] with A[RANDOM(1,n)]
There is a simple proof to disproof this one:
For n elements, there are n! possible permutations. For every step in the above algorithm, there will generate n possible permutation for every node. That is to say, the 1st step there are n possible conditions, in the 2nd one there will be n*n, and for k-th step, number of conditions will be n^k. Thus, when n steps finish, there are n^n possible conditions. However, when n>=2, n^n can not be divided by n! with an integer result. And it means possibility for each permutation is not equal, which show not uniform.
![image](http://img.blog.csdn.net/20131119165308718)
if A is [1,2,3], then after 3 steps, the possible conditions are:
[1, 2, 3]	4
[1, 3, 2]	5
[2, 1, 3]	5
[2, 3, 1]	5
[3, 1, 2]	4
[3, 2, 1]	4


and the frequency of each permutation is not the same.

This simple disproof can be referenced by [newdye](http://blog.csdn.net/newdye/article/details/16827089)'s blog.

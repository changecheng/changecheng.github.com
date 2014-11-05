---
layout: post
title: "Apple Script For Rake Post"
description: ""
category: technology
tags: [applescript,post]
---
{% include JB/setup %}


Here is my usual routine to make a post for this blog:


1. open the terminal


2. type cd /Users/ChangeCheng/Documents...


3. type rake post title=""


4. open the finder step by step to reach _posts


5. then open the newly created post


Now, I am tired of all those meaningless and boring routine, then I just make an apple script to finish all those steps. Here is my code:


	try		display dialog "Title of Post (use - as delimeter)" default answer ""		set postTitle to text returned of result as text		set curDate to current date		set curYear to year of curDate		set curMonth to month of curDate		set curDay to day of curDate		set Month_List to {January, February, March, April, May, June, July, August, September, October, November, December}		set i to 1		repeat while (item i of Month_List is not equal to curMonth)			set i to i + 1		end repeat		if i < 10 then			set i to "0" & i		end if		if curDay < 10 then			set curDay to "0" & curDay		end if		set formatedDate to curYear & "-" & i & "-" & curDay & "-"		do shell script "cd /Users/ChangeCheng/Documents/changecheng.github.com;rake post title=\"" & postTitle & "\""		do shell script "open -a Mou /Users/ChangeCheng/Documents/changecheng.github.com/_posts/" & formatedDate & postTitle & ".md"	end try
	
	
I tried to use records to pair months and their corresponding index, like `set myRecord to {January:1,February:2}`. However, it is quite query that records can't be associated by variable, but only the key directly. For example, `January of myRecord` returns 1, but curMonth which equals to January instead will return error.
Anyway, it's very quick and convenient to use a script, and I quite enjoy this!!
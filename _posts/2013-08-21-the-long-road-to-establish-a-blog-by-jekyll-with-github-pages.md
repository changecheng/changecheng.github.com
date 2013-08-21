---
layout: post
title: "The long road to establish a blog by Jekyll with Github Pages"
description: ""
category: Technology
tags: [jekyll, blog, mac, centos]
---
{% include JB/setup %}

#The Reason

  Since sometime ago, I was trying to find a free place for me to write down my own articles to express my emotion as well as something interesting. At that time, I used RenRen, Sina Weibo, QQ Zone as well as Baidu Hi. Sina Weibo is the first to be excluded because it is something alike Twitter. Unfortunately, although RenRen or QQ zone are proper platforms, there are too many familiar friends or families. As a result, I resorted to Baidu Hi, which meets my requirement for quite a long time: Private and Personal. But happy time did not last long, it changed to a new version, a disgusting version, so I had no way but to give it up.

  After a long time of silence, my willing to write my own blog sparks. Then, my best friend [Rebornix](http://www.rebornix.com) recommended me to establish a blog using Jekyll and Github Pages. It sounds quite cool! For that I can possess a free and clean place for my own world. Then the long road began.
  
#First Try

I was using Mac OS 10.8.4 with Xcode 4.2 at first. According to a very careful technological article [《搭建一个免费的，无限流量的Blog----github Pages和Jekyll入门》](http://www.ruanyifeng.com/blog/2012/08/blogging_with_jekyll.html), I began my own trial. I have to say that I am an amateur in programming, and you can image the hard for me to handle so many problems by Google as well as Baidu. I installed Macports, gcc, rvm, ruby and maybe other libraries or supporting programs. There were always problems of libraries, and I had always to update my macports, to try another version of gcc, ruby gem or other problems drove me mad. 

At last, what was the most disappointing was that jekyll would not be right there in my computer! Was it astonishing? I used {% highlight c %}`gem install jekyll`{% endhightlight %} to install jekyll, it would remind me lack of permission to write in. Then trying `sudo su`, `gem install jekyll`, and I could install jekyll successively. When I typed 'je' and pressed tab, jekyll command would appear, proving that jekyll was already in there. Dramatically, after a while, when I input `jekyll serve` or `sudo su`,`jekyll serve`, jekyll would not work, and could not find jekyll command. Trying lots of times, I gave it up with great anger!

#The Trial on CentOS

Some days ago, I contacted Linux, so I installed a CentOS in my parallels desktop. One day, a mind that maybe jekyll can success in this Linux OS sparked in my brain. Then another trial began.

This time, everything seemed so easy. C compiler, gcc, rvm, ruby and jekyll are necessary. Ruby1.8-dev is important for installation of gem. Details can be seen in  [《像黑客一样写博客——Jekyll入门》](http://www.cnblogs.com/TheGrandDesign/articles/2573282.html). It is glad that I finally finish the blog of jekyll_demo site.

#The Back on Mac

This time, my platform has changed to Mac OS 10.9 DP5 with Xcode 4. I tried to install jekyll again, but failed. Then I changed ruby version and deleted version2.0.0-p247. It is sad that when I tried to reinstall this version, c compiler seemed failed. Then I updated macports, also with failure. Maybe, the c compiler failed because of the change of my mac os? I tried Xcode 5, and nothing happened. Trying to delete Xcode 4 with 5 alone, the problem could not be solved. Then I deleted Xcode 5 and reinstall Xcode 4, again, the c compiler just wouldn't work! Ahhhhhh! I deleted all Xcode!

This time, I configured the gcc, and the os reminded me that c compiler was required and the downloading began. It made me happy. At last, this worked. 

Every hope comes to the installation of jekyll! With great hope and anxiety of another failure, I typed in the terminal `gem install jekyll`, returned permission denied. F\*\*k! Then carefully, I typed `sudo gem install jekyll`, and that's OK. But also, after a while, jekyll would not work. I typed `gem list`, and what was sad was that jekyll, as well as those gems installed with jekyll, did not appear in the list! Sadly, hopelessly and angrily, I reinstalled it again. After times of check, it worked without any problem, miraculously. And I found that I have to use `sudo jekyll serve` in order to begin the serve. But everything can be OK, so who cares?

#Jekyll Bootstrap

After finish of establish the blog, how to make it looked beautiful troubles me. I don't know CSS or html programming, so [jekyll bootstrap](http://jekyllbootstrap.com) is proper for people like me. It provides many beautiful themes and it make the process of establishment and post quite easy.

## If you are excited about jekyll and github pages, don't wait, just make a try~
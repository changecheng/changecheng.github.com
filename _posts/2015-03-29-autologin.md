---
layout: post
title: "AutoLogin"
description: ""
category: technology
tags: [autologin,python]
---
{% include JB/setup %}


今天早上打开某连续签到升级会员的网站，发现我昨天居然忘了签了，结果就是得从头开始连续登录了。简直让人抓狂。遂打算写个自动登录脚本，免去我的后顾之忧。


上网搜了搜，找到了方法，参见[python访问需要登录的网页 ](http://blog.chinaunix.net/uid-25979788-id-3481639.html)。这里贴个：


	#encoding=utf-8
	import urllib2
	import urllib
	import cookielib
	def AutoLogin(url,user,password):
    	login_page = "loginpagesite" #目标网站的登录网址，抓包得到POST
	    try:
	        #获得一个cookieJar实例
	        cj = cookielib.CookieJar()
	        #cookieJar作为参数，获得一个opener的实例
	        opener=urllib2.build_opener(urllib2.HTTPCookieProcessor(cj))
	        #伪装成一个正常的浏览器，避免有些web服务器拒绝访问。
	        opener.addheaders = [('User-agent','Mozilla/5.0 (Windows NT 6.1) \
	        AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2272.101 Safari/537.36')]
	        #生成Post数据，含有登陆用户名密码。
	        data = urllib.urlencode({"account":user,"password":password}) 
	        #account 和password要看具体的name
	        #以post的方法访问登陆页面，访问之后cookieJar会自定保存cookie
	        opener.open(login_page,data)
	        #以带cookie的方式访问页面
	        op=opener.open(url)
	        #读取页面源码
	        data= op.read()
	        return data
	    except Exception,e:
	        print str(e)

	data=AutoLogin("example, index page","username","password")
	print data



接下来，就是写入crontab。在mac上`controntab -e`，打开文件，写入`* */hours * * * file path`其中，hours是期望运行的时间间隔，以小时算，file path是m执行的Python脚本所在路径。具体使用参见[Mac os下定时启动一个脚本](http://blog.sina.com.cn/s/blog_60b45f2301011hqp.html)。

*Attention:*
我用crontab遇到了一大堆问题，还没成功，最终放弃了。改用Mac下的launchctl。


首先，在脚本文件首行加入`#! /usr/bin/python`，其次，更改权限`chmod 777 yourpython.py`，使其能够执行。在~/Library/LaunchAgents下，新建com.xxx.yyy.plist(xxx, yyy as you like)。填入：


    <?xml version="1.0" encoding="UTF-8"?>
	<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
	<plist version="1.0">
	<dict>
 	<key>Label</key>
 	<string>名称，一般和文件名同</string>
	<key>ProgramArguments</key>
  	<array>
    <string>你执行py的路径</string>
  	</array>
  	<key>StartInterval</key>
  	<integer>14400</integer> ##每隔14400
  	<key>StandardOutPath</key>
	<string>输出路径</string>
	<key>StandardErrorPath</key>
	<string>错误消息路径</string>
	</dict>
	</plist>

接着，进入~/Library/LaunchAgents，`launchctl load com.xxx.yyy.plist`就行了。如果更改了plist，用`launchctl unload com.xxx.yyy.plist`取消，在load。也可`launchctl start com.xxx.yyy.plist`立即执行，`launchctl stop com.xxx.yyy.plist`停止。


具体的launchctl命令详见：[官方文档](https://developer.apple.com/library/mac/documentation/Darwin/Reference/ManPages/man5/launchd.plist.5.html)。两个参考例子：[Mac 使用 launchctl 定时运行程序](http://my.oschina.net/jackin/blog/263024)和[Schedule jobs using launchd](http://nathangrigg.net/2012/07/schedule-jobs-using-launchd/)


*ps：*launchctl有一点胜过crontab，就是预定的任务如果执行时间电脑不工作，则一旦电脑工作立即执行。真是nice。

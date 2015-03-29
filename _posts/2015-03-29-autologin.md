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



接下来，就是写入crontab。在mac上`sudo controntab -e`，打开文件，写入`* */hours * * * file path`其中，hours是期望运行的时间间隔，以小时算，file path是m执行的Python脚本所在路径。具体使用参见[Mac os下定时启动一个脚本](http://blog.sina.com.cn/s/blog_60b45f2301011hqp.html)。
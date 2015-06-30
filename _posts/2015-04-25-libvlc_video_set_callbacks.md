---
layout: post
title: "libvlc_video_set_callbacks"
description: ""
category: technology
tags: [libvlc,callbacks]
---
{% include JB/setup %}
<br />

最近用libvlc二次开发，需要提取每一帧。主要的需要用到以下函数。


	LIBVLC_API 
	void libvlc_video_set_callbacks( libvlc_media_player_t *mp,

















该函数用opaque和picture进行显示。



libvlc_video_set_callbacks还要搭配libvlc_video_set_format或者libvlc_video_set_format_callbacks使用。


	void libvlc_video_set_format( libvlc_media_player_t *mp, const char *chroma,

chroma是形如“RV32”、“YUYV”的字符串。pitch一般是height的4倍。

	void libvlc_video_set_format_callbacks( libvlc_media_player_t *mp,






总之，以上的函数就可以实现提取每一帧了。后续仍待研究。


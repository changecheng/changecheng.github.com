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
	void libvlc_video_set_callbacks( libvlc_media_player_t *mp,                                     libvlc_video_lock_cb lock,                                     libvlc_video_unlock_cb unlock,                                     libvlc_video_display_cb display,                                     void *opaque );
这个函数的作用如下：
1. mp是media player的一个实例。
2.lock，每当有视频进行新的一帧的解码时，会调用lock来锁住内存。
3.unlock，在解码完至显示之间，可对每一帧数据进行操作。
4.display，对数据进行显示。
5.opaque，唯一的一个传递参数的指针。所以，一般都是指向一个结构体，而结构体包括了很多其它需要的参数。
lock：
	typedef void *(*libvlc_video_lock_cb)(void *opaque, void **planes);
	
在qt中，我定义lock，unlock，display以及其它回调函数为静态函数。
此处opaque如上所述，传递参数结构体。planes指向图像阵列。
此函数还会返回图像buffer的指针，供unlock和display使用，即为picture指针。
unlock：
	typedef void (*libvlc_video_unlock_cb)(void *opaque, void *picture,                                       void *const *planes);此处opaque和planes见上。picture即为lock返回的指针。
display：
	typedef void (*libvlc_video_display_cb)(void *opaque, void *picture);
	
该函数用opaque和picture进行显示。



libvlc_video_set_callbacks还要搭配libvlc_video_set_format或者libvlc_video_set_format_callbacks使用。


	void libvlc_video_set_format( libvlc_media_player_t *mp, const char *chroma,                              unsigned width, unsigned height,                              unsigned pitch );

chroma是形如“RV32”、“YUYV”的字符串。pitch一般是height的4倍。

	void libvlc_video_set_format_callbacks( libvlc_media_player_t *mp,                                        libvlc_video_format_cb setup,                                        libvlc_video_cleanup_cb cleanup );
setup：
	typedef unsigned (*libvlc_video_format_cb)(void **opaque, char *chroma,                                           unsigned *width, unsigned *height,                                           unsigned *pitches,                                           unsigned *lines);**opaque指向opaque的指针的指针，用于传入libvlc_video_set_callbacks的参数。chroma如上，用形如strcpy(chroma,"RV32")即可。此处width和height均可重新定义。pitches一般height的4倍，lines一般等于width。
cleanup：
	typedef void (*libvlc_video_cleanup_cb)(void *opaque);用于释放已分配的内存。可以是NULL。


总之，以上的函数就可以实现提取每一帧了。后续仍待研究。
                                 
                             
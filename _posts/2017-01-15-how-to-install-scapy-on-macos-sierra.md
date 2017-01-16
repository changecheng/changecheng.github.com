---
layout: post
title: "how to install scapy on macOS Sierra"
description: ""
category: technology
tags: [scapy,macOS,Sierra]
---
{% include JB/setup %}


1. install [homebrew](http://brew.sh).
2. install python with homebrew: `brew install python`. This is qutie important. Otherwise you will encounter other problems.
3. install scapy using pip: `sudo pip install scapy`.
4. install pypcap rather than pcapy, as the latter wouldn't work: `pip install pypcap`
5. when encountered error like 'import error: _io', execute your script with `sudo`
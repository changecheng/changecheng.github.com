---
layout: post
title: "Reset launchpad after osx yosemite"
description: "method to reset launchpad after osx yosemite"
category: technology
tags: [launch,osx]
---
{% include JB/setup %}



Entering following command in your terminal:

	defaults write com.apple.dock ResetLaunchPad -bool true; killall Dock


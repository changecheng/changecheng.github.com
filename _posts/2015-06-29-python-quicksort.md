---
layout: post
title: "Python Quicksort"
description: ""
category: technology
tags: [python,quicksort]
---
{% include JB/setup %}
<br />
<br />
`qsort = lambda l: l if len(l)<=1 else qsort([x for x in l[1:] if x<l[0]])+[l[0]]     +qsort([x for x in l[1:] if x>=l[0]])`

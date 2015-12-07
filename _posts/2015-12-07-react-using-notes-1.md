---
layout: post
title: "React Using Notes: 1"
description: ""
category: technology
tags: [React]
---
{% include JB/setup %}
###Basic framework:


[React](http://facebook.github.io/react/index.html)+[Reflux](https://github.com/reflux/refluxjs)+[Webpack](http://webpack.github.io), with [nodejs](https://nodejs.org/en/).

###Issues I encountered:


1. When using `<input>` with defaultValue, such as `<input type='text' defaultValue={this.props.name} />`, if you change **this.props.name**, this input node will not reRender. Only when its value changed, it reRender. So using `<input type='text' value={this.props.name} onChange={this.handleChange} />` instead.
2. I thought there were other problems, but they are almost about JS...


###Some codes:
Offline transcode from JSX to JS:
<pre >
	npm install --global babel-cli
	npm install babel-preset-react
	babel --presets react src --watch --out-dir build 
</pre>
webpack.config.js:
<pre style={overflow:scroll}>
module.exports = {
    entry: "./index.js", //entryfile
    output: {
        path: __dirname, //localpath
        filename: "bundle.js" //output filename
    },
    module: {
        loaders: [
            { test: /\.css$/, exclude: /(node_modules|bower_components)/,loader: "style!css" },
            {
              test: /\.jsx?$/,
              exclude: /(node_modules|bower_components)/,
              loader: 'babel',
              query: {
                presets: ['react'],
                cacheDirectory:true
              }
            }

        ]
    }
};
</pre>
<div id='example>
</div>
<script src="https://cdnjs.cloudflare.com/ajax/libs/react/0.14.3/react.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/react/0.14.3/react-dom.js"></script>
<script src='/js/animateicon.js'></script>
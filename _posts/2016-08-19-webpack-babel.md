---
layout: post
title: "webpack babel"
description: ""
category: 
tags: [webpack,babel]
---
{% include JB/setup %}


webpack & babel & es2015 & react

	npm install babel-loader babel-core babel-preset-es2015 babel-preset-es2015-react --save-dev
	
	
webpack.config.js

<pre>
var webpack = require('webpack');
module.exports = {
    entry: {
        index:"./index.js"
    },
    output: {
        path: __dirname+'/dist',
        filename: "[name].bundle.js",
        publicPath:'/'
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env':{
                'NODE_ENV':'"production"'
            }
        })
    ],
    module: {
        loaders: [
            { test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: "url-loader?limit=300000000" },
            // { test: /\.css$/, exclude: /(node_modules|bower_components)/,loader: "style-loader!css-loader" },
            {
              test: /\.jsx?$/,
              exclude: /(node_modules|bower_components)/,
              loader: 'babel',
              query:{
                presets:['es2015']
              }
            }


        ]
    }
};

</pre>


	

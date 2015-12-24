---
layout: post
title: "React Using Notes: 2"
description: ""
category: technology
tags: [react,lifecycle]
---
{% include JB/setup %}


Today, I encountered a problem, and it is as follows:

<pre>
	ComponentA = React.createClass(){
		getInitialState:function(){
			return {width:this.props.width};
		},
		handleClick:function(e){
			var width = this.state.width;
			this.setState({width:width+10});
		},
		render:function(){
			return (
				<ComponentB width={this.state.width} onClick={this.handleClick}  />
			);
		}
	}
</pre>

And the trouble is when I change ComponentA's props.width, because the getInitialState will only execute once, so, its initial state will not change accordingly. 


And after a night of thinking, I read [React's official API document](http://facebook.github.io/react/docs/component-specs.html), and I found the answer.

There is a period called **componentWillReceiveProps** which is in charge of updating when receiving new props. So that's the key for my problem, just setState in this method.




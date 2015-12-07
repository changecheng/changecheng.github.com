var exampleDiv = document.getElementById('example');
var maxWidth = exampleDiv.offsetWidth;
console.log(maxWidth);
var AnimateIcon = React.createClass({
	displayName: 'AnimateIcon',

	getInitialState: function () {
		return { img: {}, clockwise: true, imgisload: false, rotateT: 30, rotateA: 1, imgSize: { w: 0.5, h: 0.5 }, rotateID: 0 };
	},
	imgLoad: function (imgUrl) {
		var img = new Image();
		var canvas = this.refs.canvas;
		var ctx = canvas.getContext('2d');
		img.src = imgUrl;
		var imgisload = this.state.imgisload;
		var self = this;
		img.onload = function () {
			imgisload = true;
			self.setState({ img: img, imgisload: imgisload });
			ctx.clearRect(0, 0, canvas.width, canvas.height);
			ctx.drawImage(img, 0.5 * (1 - self.state.imgSize.w) * canvas.width, 0.5 * (1 - self.state.imgSize.h) * canvas.height, self.state.imgSize.w * canvas.width, self.state.imgSize.w * canvas.height);
			self.rotateAnimate();
		};
	},
	rotateAnimate: function () {
		clearInterval(this.state.rotateID);
		if (this.state.imgisload) {
			var canvas = this.refs.canvas;
			var ID = setInterval(this.rotateImg, this.state.rotateT, canvas, this.state.img, { x: 0.5 * canvas.width, y: 0.5 * canvas.height }, this.state.rotateA * Math.PI / 180, this.state.imgSize.w * canvas.width, this.state.imgSize.w * canvas.height);
			var rotateA = this.state.rotateA;
			rotateA = -rotateA;
			this.setState({ rotateA: rotateA, rotateID: ID });
		};
	},
	componentDidMount: function () {
		var canvas = this.refs.canvas;
		canvas.width = 0.5 * maxWidth;
		canvas.height = 0.5 * maxWidth;
		this.imgLoad(this.props.imgUrl);
	},
	rotateImg: function (canvas, img, center, rad, width, height) {
		var canvas = this.refs.canvas;
		var ctx = canvas.getContext('2d');
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		ctx.translate(center.x, center.y);
		ctx.rotate(rad);
		ctx.drawImage(img, -0.5 * width, -0.5 * height, width, height);
		ctx.translate(-center.x, -center.y);
	},
	handleClick: function (e) {
		e.preventDefault();
		this.rotateAnimate();
		console.log(this.state.rotateA);
	},
	render: function () {
		return React.createElement(
			'div',
			{ onClick: this.handleClick },
			React.createElement(
				'canvas',
				{ ref: 'canvas' },
				'canvas not supported'
			)
		);
	}

});
ReactDOM.render(React.createElement(AnimateIcon, { imgUrl: '/media/apple-touch-icon.png' }), exampleDiv);
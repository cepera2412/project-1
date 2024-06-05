const config = {
	mode: 'production',
	entry: {
		// swiper: './app/js/swiper.js',
		index: './app/js/index.js',

		// about: './app/js/about.js',
	},
	output: {
		filename: '[name].bundle.js',
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
			},
		],
	},
}

module.exports = config

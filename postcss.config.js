module.exports = {
	plugins: [
		[
			'postcss-preset-env',
			{
				stage: 3,
				autoprefixer: true,
				browsers: ['last 2 version', '>1%', 'iOS 7'],
			},
		],
	],
}

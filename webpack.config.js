const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const devMode = process.env.NODE_ENV !== 'production'

module.exports = {
	mode: 'development',
	entry: './src/index.tsx',
	output: {
		filename: '[name].[contenthash].js',
		path: path.resolve(__dirname, 'dist'),
		clean: true,
	},
	module: {
		rules: [
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				type: 'asset/resource',
			},
			{
				test: /\.(s[ac]|c)ss$/i,
				use: [
					MiniCssExtractPlugin.loader,
					'css-loader',
					'postcss-loader',
					{
						loader: 'sass-loader',
						options: {
							implementation: require('sass'),
						},
					},
				],
			},
			{
				test: /\.tsx?$/,
				loader: 'ts-loader',
				exclude: /node_modules/,
				options: {
					transpileOnly: true,
				},
			},
		],
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js'],
	},
	devtool: 'eval-cheap-module-source-map',
	devServer: {
		static: './dist',
		hot: true,
	},
	optimization: {
		moduleIds: 'deterministic',
		runtimeChunk: 'single',
		splitChunks: {
			cacheGroups: {
				vendor: {
					test: /[\\/]node_modules[\\/]/,
					name: 'vendors',
					chunks: 'all',
				},
			},
		},
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'development',
			template: path.resolve(__dirname, './public/index.html'),
		}),
		new ForkTsCheckerWebpackPlugin(),
		new MiniCssExtractPlugin({
			filename: devMode ? '[name].css' : '[name].[contenthash].css',
			chunkFilename: devMode ? '[id].css' : '[id].[contenthash].css',
		}),
	],
}

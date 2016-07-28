var webpack  =require('webpack');
var path = require('path');
var libraryName = 'library';

module.exports = {
	entry:'./client/app.js',
	output:{
		path:'./build',
		publicPath:'build/',
		filename:'bundle.js',
		library: libraryName,
	    libraryTarget: 'umd',
	    umdNamedDefine: true
	},
	module:{
		loaders:[
			{test:/\.css$/,loader:'style!css'},
			{test:/\.vue$/,loader:'vue'},
			{test:/\.js$/,exclude: /node_modules/,loader:'babel'},
			{test:/\.html$/,loader:'vue-html'},
			{test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,loader: 'url'}
		]
	},
	plugins:[
		new webpack.BannerPlugin('this is plugin test from feiling.zheng')
	],
	// devtool: '#eval-source-map'
}
if (process.env.NODE_ENV === 'production') {
  module.exports.plugins = [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.optimize.OccurenceOrderPlugin()
  ]
} else {
  // module.exports.devtool = '#source-map'
}
switch (process.env.NODE_ENV) {
  case 'prod':
    module.exports = require('./webpack_Config/webpack.prod.js');
    break;
  case 'dev':
  default:
    module.exports = require('./webpack_Config/webpack.dev.js')
}




























// var webpack = require('webpack');
// var path = require('path');
// var HtmlwebpackPlugin = require('html-webpack-plugin');//自动生成html包含打包好的bundles.js
//
//
// // Webpack Config
// var webpackConfig = {
//   entry: {
//     'polyfills': './src/polyfills.ts',//填充物
//     'vendor':    './src/vendor.browser.ts',//第三方库
//     'main':       './src/main.ts',
//   },
//
//   resolve: {
//     root: [ path.join(__dirname, 'src') ],
//     extensions: ['', '.ts', '.js']
//   },
//
//   output: {
//     path: './dist',
//   },
//
//   plugins: [
//     new webpack.NoErrorsPlugin(),
//     //如果出现任何错误，就终止构建。
//     // new webpack.optimize.DedupePlugin(),
//     //检测完全相同(以及几乎完全相同)的文件，并把它们从输出中移除。
//     new webpack.optimize.OccurenceOrderPlugin(true),
//     //为组件分配ID，通过这个插件webpack可以分析和优先考虑使用最多的模块，并为它们分配最小的ID
//     new webpack.optimize.CommonsChunkPlugin({ name: ['main','vendor','polyfills'], minChunks: Infinity }),
//     //提取第三方库
//
//     new HtmlwebpackPlugin({
//       title: 'webpack-angular',
//       template:'./src/index.html',//自定义模块
//       inject:'body'//把js资源加载在body之后
//     }),
//   ],
//
//   module: {
//     loaders: [
//       // .ts files for TypeScript
//       { test: /\.ts$/, loaders: ['awesome-typescript-loader', 'angular2-template-loader'] },
//       { test: /\.css$/, loaders: ['to-string-loader', 'css-loader'] },
//       { test: /\.html$/, loader: 'raw-loader' }
//     ]
//   }
//
// };
//
//
// // Our Webpack Defaults
// var defaultConfig = {
//   devtool: 'cheap-module-source-map',
//   cache: true,
//   debug: true,
//   output: {
//     filename: '[name].bundle.js',
//     sourceMapFilename: '[name].map',
//     chunkFilename: '[id].chunk.js'
//   },
//
//
//
//   devServer: {
//     historyApiFallback: true,
//     // watchOptions: { aggregateTimeout: 300, poll: 1000 }
//   },
//
//   node: {
//     global: 1,
//     crypto: 'empty',
//     module: 0,
//     Buffer: 0,
//     clearImmediate: 0,
//     setImmediate: 0
//   }
// };
//
// var webpackMerge = require('webpack-merge');
// module.exports = webpackMerge(defaultConfig, webpackConfig);

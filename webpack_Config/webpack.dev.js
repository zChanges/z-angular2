//开发模式 webpack配置
var webpack=require('webpack')
var webpackMerge = require('webpack-merge');//合并webpack配置。
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var commonConfig = require('./webpack.common.js');
var helpers = require('./helpers');

module.exports = webpackMerge(commonConfig, {
    devtool: 'cheap-module-eval-source-map',//开发环境推荐
    output: {
        path: helpers.root('dist'),
        publicPath: '',
        filename: '[name].js',
        chunkFilename: '[name].chunk.js'//非入口文件命名规则
    },

    plugins: [
        new ExtractTextPlugin('[name].css')
        //css在js中抽离出来
    ],

    devServer: {
        //html5 api需要索引服务历史
        historyApiFallback: true,
        stats: 'minimal',
        host:'0.0.0.0',
        port: 5000
    },
});

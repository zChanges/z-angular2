var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');//抽离css
var helpers = require('./helpers');

//获取命令下设置的环境
//process.env属性返回一个对象，包含了当前Shell的所有环境变量。
//比如，process.env.HOME返回用户的主目录。
var env = process.env.NODE_ENV;
var isProd= env==='prod';

module.exports = {
    //打包入口文件
    entry:{
      'polyfills':'./src/polyfills.ts',//填充文件zoon……
      'vendor':'./src/vendor.ts',//第三方库
      'main':'./src/main.ts'
    },
    //查找以来文件路径
    resolve:{
      //指定后缀。
      extensions:['.ts','.js']
    },

    /*
    *module.loaders:定义对模块的处理逻辑
    *test:正则，用于匹配要处理的文件
    *loaders:字符串或数组。如果只需要一个模块加载器，就使用string
    *include:字符串或数组，包含的文件夹
    *exclude:字符串或者数组,排除文件
    */
    module: {
      loaders: [
        {
          test:/\.ts$/,
          loader:
            //如果是正式环境用aot编译。不是则angular编译
            //？热替换 @angularclass/hmr-loader
            isProd?['@ngtools/webpack']:['@angularclass/hmr-loader','angular2-template-loader','awesome-typescript-loader','angular2-router-loader']
        },
        { test:/\.html$/, loader:'html-loader' },
        { test:/\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot)$/, loader:'image-webpack-loader' },
        //ExtractTextPlugin 抽离css
        //??fallbackLoader和loader的区别
        { test:/\.css$/, exclude:[helpers.root('src','app')], loaders:ExtractTextPlugin.extract({fallbackLoader:'style-loader',loader:'css-loader'})},
        { test:/\.css$/, include:[helpers.root('src','app')], loader:'to-string-loader!css-loader'},
        //处理bootstrap
        { test: /\.(woff|woff2)$/, loader: "url-loader?limit=10000&mimetype=application/font-woff" },
        { test: /\.ttf$/,  loader: "url-loader?limit=10000&mimetype=application/octet-stream" },
        { test: /\.eot$/,  loader: "file-loader" },
        { test: /\.svg$/,  loader: "url-loader?limit=10000&mimetype=image/svg+xml" },
        
        { test:/favicon.ico$/, loader: 'file-loader?name=[name].[ext]' }
      ]
    },

    plugins: [
        //提取公共代码
        new webpack.optimize.CommonsChunkPlugin({
             name: ['main', 'vendor', 'polyfills']
        }),


        //替换上下文
        new webpack.ContextReplacementPlugin(
            /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
            __dirname
        ),

        //处理css 支持浏览器前缀
        new webpack.LoaderOptionsPlugin({
            options:{
                postcss:[
                    require('autoprefixer')
                ]
            }
        }),
        new HtmlWebpackPlugin({
            title: 'webpack-angular',
            template: 'src/index.html',
            inject:'body'//把js资源加载在body之后
        }),

        //如果想引入jq，使用此代码
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery"
        })
    ]


}

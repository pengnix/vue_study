const path = require("path")
const webpack = require("webpack")
const HtmlWebpackPlugin = require('html-webpack-plugin')
const UglifysWebpackPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
    entry: "./src/main.js",
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: "bundle.js",
        // publicPath: 'dist/'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.less$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }, {
                    loader: "less-loader" // compiles Less to CSS
                }]
            },
            {
                test: /\.(png|jpg|gif|jpeg)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            //小于limit，将图片编译成base64字符串形式
                            //大于limit，将使用file-loader
                            limit: 30000,
                            name: 'img/[name].[hash:8].[ext]'
                        }
                    }
                ]
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015']
                    }
                }
            },
            {
                test: /\.vue$/,
                use: [{
                    loader: "vue-loader" // creates style nodes from JS strings
                }]
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.css', '.vue'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    },
    plugins: [
        new webpack.BannerPlugin('最终版权归hello所有'),
        new HtmlWebpackPlugin({
            template: 'index.html'
        }),
    ]
}
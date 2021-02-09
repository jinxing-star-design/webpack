const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');


module.exports = {
   // mode: 'production',
    entry:{
        app: './src/index.js',
        //print: './src/print.js'
    },
    //devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.css/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },

            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'Output Management',
            template: './src/public/index.html'
        })

    ],
    output: {
        filename:'[name].bundler.js',
        path: path.resolve(__dirname, 'dist')//作用是得到一个和系统相关的绝对路径
    }
};
const merge = require('webpack-merge');
const common = require('./wepback.common.js');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = merge(common,{
    mode:'production',
    devtool: 'source-map',
    devServer : {
        contentBase: './dist',
        hot: true
    },
    plugins: [ 
            new UglifyJSPlugin({
           sourceMap: true
             })
    ],

})
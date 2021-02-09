const merge = require('webpack-merge');
const common = require('./wepback.common.js');
const webpack = require('webpack');

module.exports = merge(common,{
    devtool: 'inline-source-map',
    devServer : {
        contentBase: './dist',
        hot: true
    },
    plugins: [
        {optimization: {
            namedModules: true
          }},
        new webpack.HotModuleReplacementPlugin()
    ]
})
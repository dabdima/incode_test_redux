var path = require('path');
var webpack = require('webpack');

const NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = {
    devServer: {
        inline: true,
        contentBase: './src',
        port: 3000
    },
    devtool: NODE_ENV == 'development' ? 'cheap-module-eval-source-map' : null,
    entry: './code/js/index.js',
    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: ['babel'],
                exclude: /node_modules/
            },
            {
                test: /\.scss/,
                loader: 'style-loader!css-loader!sass-loader'
            }
        ]
    },
    output: {
        path: 'src',
        filename: 'js/bundle.min.js'
    },
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin()
    ],






    watch: NODE_ENV == 'development',

    watchOptions: {
        aggregateTimeout: 300
    }
};

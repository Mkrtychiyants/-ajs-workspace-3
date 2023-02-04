const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    MiniCSSExtractPlugin.loader, 'css-loader',
                ]
            },
            {
                test: /\.js$/,
                exclude: '/node_modules',
                loader: 'babel-loader',
            }
        ]
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: './src/index.html',
            filename: './main.html'
        }),
        new MiniCSSExtractPlugin()
    ]
}
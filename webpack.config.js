const { VueLoaderPlugin } = require('vue-loader');
const { join } = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: [
        './src/main.js'
    ],
    output: {
        filename: 'app.bundeled.js',
        path: join(__dirname, './public/build/')
    },
    devServer: {
        port: 8080,
        hot: true,
        open: true,
        historyApiFallback: true
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: 'vue-loader'
            },
            {
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    'stylus-loader'
                ]
            },
            {
                test: /\.styl(us)?$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    'stylus-loader'
                ]
            }
        ],
    },
    plugins: [
        new VueLoaderPlugin(),
        new HTMLWebpackPlugin({
            showErrors: true,
            cache: true,
            template: join(__dirname, 'public/index.html'),
        })
    ]
}

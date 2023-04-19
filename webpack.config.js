const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
    entry: './public/src/app.js',
    output: {
        path: path.resolve(__dirname, 'public/dist'),
        filename: 'app.js',
        clean: true
    },
    plugins: [new HtmlWebpackPlugin({title: 'Recipe Book'})],
};

module.exports = config;
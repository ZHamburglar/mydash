const webpack = require('webpack');
const dotenv = require('dotenv');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const isProd = process.env.NODE_ENV === 'development';
console.log('NODE_ENV: ', process.env.NODE_ENVT); // 'local'
console.log('YNAB API KEY: ', process.env.YNAB_API_KEY); // 'local'

console.log('Production: ', process.env.production); // true

module.exports = {
    
    entry: ['babel-polyfill','./src/index.js'],
    context: __dirname,
    module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            loader: 'babel-loader',
            exclude: /(node_modules|bower_components)/,
            query: {
                presets: ['@babel/react', '@babel/preset-env'],
                plugins: ['@babel/proposal-class-properties']
            }
        },
        {
            test: /\.css$/,
            loader: 'style-loader!css-loader'
        }
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
    node: {
        console: false,
        fs: 'empty',
        net: 'empty',
        tls: 'empty'
    },
    output: {
      path: __dirname + '/dist',
      publicPath: '/',
      filename: 'bundle.js'
    },
    plugins: [
        new webpack.DefinePlugin({
            $dirname: '__dirname',
            'process.env': {
                NODE_ENV: JSON.stringify(process.env.NODE_ENVT),
                YNAB_API_KEY: JSON.stringify(process.env.YNAB_API_KEY),
            },
          }),
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
      contentBase: './dist',
      hot: true
    }
  };
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');


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
    output: {
      path: __dirname + '/dist',
      publicPath: '/',
      filename: 'bundle.js'
    },
    plugins: [
        new webpack.DefinePlugin({
            $dirname: '__dirname',
          }),
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
      contentBase: './dist',
      hot: true
    }
  };
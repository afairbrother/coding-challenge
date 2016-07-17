'use strict';

var path = require('path');
var webpack = require('webpack');

// Sass compile plugin
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var extractCSS = new ExtractTextPlugin('styles/main.css');

var plugins = [
  new webpack.optimize.OccurenceOrderPlugin(),
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoErrorsPlugin(),
  extractCSS,
];

if ( process.env.NODE_ENV === 'production' ) {
  plugins.push(
    new webpack.DefinePlugin({
      NODE_ENV: JSON.stringify( 'production' )
    })
  );
}

module.exports = {

  devtool: '#inline-source-map',

  entry: [
    'webpack-hot-middleware/client', // for hot reload
    './src/index.js' // entry point for the client app
  ],

  //
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },

  //
  plugins: plugins,

  //
  resolve: {
    alias: {
    },
    // require() file without adding .jsx and .js .suffix
    extensions: ['', '.js', '.jsx']
  },

  // be sure to add 'stage-0' in .babelrc to support es7 syntax
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel',
        exclude: /node_modules/,
        include: __dirname,
        query: {
          presets: [ 'react-hmre', "es2015", "stage-0", "react" ],
          plugins: [ "transform-decorators-legacy" ],
        },
      },
      {
        test: /.(png|woff(2)?|eot|ttf|otf|svg)(\?[a-z0-9=\.]+)?$/,
        loader: 'url-loader?limit=100000'
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        loader: extractCSS.extract(['css-loader', 'sass-loader'])
      },

    ]
  },
};


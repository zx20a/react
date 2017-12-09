const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: [
    './index.js'
  ],

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        include: [
          path.resolve(__dirname, 'src')
        ],
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['env', 'react'],
        }
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.(jpe?g|png|gif|svg|ico)$/i,
        loaders: [
          'file-loader?hash=sha512&digest=hex&name=[hash].[ext]',
          'image-webpack-loader'
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'MyReact App',
      filename: 'index.html',
      inject: 'body',
      template: path.resolve(__dirname, 'public/index.tmpl.html'),
    }),
    new FaviconsWebpackPlugin({
      logo: path.resolve(__dirname, 'src/test.jpg'),
      prefix: 'assets/icons-[hash]',
      inject: true,
      background: '#ffffff',
      title: 'React Webpack App',
      icons: {
        android: true,
        favicons: true,
        firefox: true,
        windows: true
      }
    })
  ]
};

const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: process.env.NODE_ENV,
  entry: './src/_bundle/main.js',
  output: {
    path: path.resolve(__dirname, 'dist', 'assets'),
    filename: 'main.bundle.js' 
  },
  module: {
    rules: [
      { 
        test: /\.pcss$/i, 
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader']
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin(
    {
      filename: 'main.bundle.css'
    }
  ),
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
}),
],
}
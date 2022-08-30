const path = require('path');
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
        test: /\.pcss$/, 
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader']
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin(
    {
      filename: 'main.bundle.css'
    }
  )
],
}
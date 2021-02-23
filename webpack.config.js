const { resolve } = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: resolve(__dirname, 'src/assets/javascripts/index.js'),
  output: {
    path: resolve(__dirname, 'dist/assets/javascripts'),
    filename: '[name].[contenthash].js',
  },
  devtool: 'eval-source-map',
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: resolve(__dirname, 'src/index.html'),
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
    ],
  },
  devServer: {
    inline: true,
    contentBase: resolve(__dirname, 'dist'),
    watchContentBase: true,
    hot: true,
    open: true,
    port: 3000,
  },
}

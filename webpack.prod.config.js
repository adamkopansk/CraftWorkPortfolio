const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  mode: 'production',
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: [
          {
            loader: 'babel-loader',
            options: { presets: ['@babel/env'] },
          },
        ],
      },
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "ts-loader",
          },
        ],
      },
      {
        test: /\.html/,
        use: [
          {
            loader: 'html-loader',
          },
        ],
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader',
      },
    ],
  },
  resolve: { extensions: ['*', '.js', '.jsx', '.ts', '.tsx'] },
  output: {
    path: path.resolve(__dirname, 'dist/'),
    publicPath: '',
    filename: 'bundle.js',
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './public/index.html',
      filename: './index.html',
    }),
  ],
};
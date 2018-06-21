const merge = require('webpack-merge');
const commonConfiguration = require('./webpack.common');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackExcludeEmptyAssetsPlugins = require('html-webpack-exclude-empty-assets-plugin');

module.exports = merge(commonConfiguration, {
  mode: 'production',
  plugins: [
    new CleanWebpackPlugin(['build']),
    new MiniCSSExtractPlugin({
      filename: 'style.[hash].css',
    }),
    new HtmlWebpackExcludeEmptyAssetsPlugins(),
  ],
  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: [
          MiniCSSExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(jpg|gif|png|jpeg)$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 10000,
            name: 'assets/[name].[hash].[ext]',
          },
        }],
      },
      {
        test: /\.(jpg|gif|png)$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: 'assets/[name].[hash].[ext]',
          },
        }],
      },   
    ],
  },
  
});

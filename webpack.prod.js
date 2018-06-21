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
    ],
  },
});

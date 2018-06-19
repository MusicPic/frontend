const merge = require('webpack-merge');
const commonConfiguration = require('./webpack.common');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackExcludeEmpyAssetsPlugins = require('html-webpack-exclude-empty-assets-plugin');

module.exports = merge(commonConfiguration, {
  mode: 'production',
  plugins: [
    new CleanWebpackPlugin(['build']),
    new MiniCSSExtractPlugin({
      filename: 'style.[hash].css',
    }),
    new HtmlWebpackExcludeEmpyAssetsPlugins(),
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          MiniCSSExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ],
      },
    ],
  },
});

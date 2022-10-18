const webpack = require('webpack');
const loaders = require('./loaders');
const plugins = require('./plugins');
const path = require('path');


module.exports = {
  entry: ['./src/mzk.js'],
  module: {
    rules: [
      loaders.JSLoader,
      loaders.CSSLoader
    ]
  },
  output: {
    filename: 'mzk.bundle.js',
    path: path.resolve(__dirname, '../assets/dist'),
    library: 'Mzk', // We set a library name to bundle the export default of the class
    libraryTarget: 'window', // Make it globally available
    libraryExport: 'default' // Make mbp.default become mbp
  },
  plugins: [
    new webpack.ProgressPlugin(),
    plugins.CleanWebpackPlugin,
    plugins.ESLintPlugin,
    plugins.StyleLintPlugin,
    plugins.MiniCssExtractPlugin
  ]
};

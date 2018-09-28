const path = require('path');
const tailwindcss = require('tailwindcss');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const devMode = process.env.NODE_ENV !== 'production'

module.exports = {
  mode: devMode ? 'development' : 'production',
  devtool: 'source-map',
  entry: './assets/js/index.js',
  output: {
    path: path.resolve(__dirname, 'static'),
    filename: 'js/bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(sc|c)ss$/,
        use: [
          devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2
            }
          },
          'postcss-loader',
          'sass-loader',
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name].css'
    })
  ]
}

const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} =require('clean-webpack-plugin');

const BUILD_DIR = path.resolve(__dirname, "dist"); // 输出路径
const APP_DIR = path.resolve(__dirname, "src"); // 项目路径

const config = {
  entry: APP_DIR + "/index.jsx",
  output: {
    path: BUILD_DIR,
    filename: "bundle.js"
  },
  module:{
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  devServer: {
    port: 3000,
    contentBase: "./dist"
  },
  plugins:[
    new HtmlWebpackPlugin({
      template: "index.html",
      inject: true,
      sourceMap: true,
      chuncksSortMode: "dependency"
    }),
    new CleanWebpackPlugin()
  ]
}

module.exports = config;
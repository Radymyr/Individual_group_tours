const webpack = require("webpack");
const { resolve, join } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: "./src/scripts/index.js",
  output: {
    path: resolve(__dirname, "dist"),
    filename: "[name]-[fullhash].js",
    clean: true,
  },
  performance: {
    hints: false,
    maxAssetSize: 512000,
    maxEntrypointSize: 51200,
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
            plugins: ["@babel/plugin-transform-runtime"],
          },
        },
      },
      {
        test: /\.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.(html)$/,
        use: ["html-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),

    new MiniCssExtractPlugin({
      filename: "[name]-[fullhash].css",
    }),
  ],

  devServer: {
    historyApiFallback: true,
    port: 8080,
    compress: true,
    hot: true,
    static: {
      directory: join(__dirname, "src"),
    },
  },

  devtool: "inline-source-map",
};

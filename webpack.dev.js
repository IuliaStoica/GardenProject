const path = require("path");
const common = require("./webpack.common");
const merge = require("webpack-merge");
let HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(common, {
  mode: "development",
  devtool: "eval-cheap-module-source-map",
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"), //the dist folder will not be created when you run with webpack-dev-server, the server keeps track of everything in memory
  },
  devServer: {
    //to send all requests to index.html, this way we can load deep links and they will all be handled by react router
    historyApiFallback: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          "style-loader", //2. Inject styles into DOM
          "css-loader", //1. Turns css into commonjs
        ],
      },
    ],
  },
});

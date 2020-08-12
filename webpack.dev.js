const path = require("path");
const common = require("./webpack.common");
const merge = require("webpack-merge");
let HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(common, {
    mode: "development",
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist") //the dist folder will not be created when you run with webpack-dev-server, the server keeps track of everything in memory
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    "style-loader", //2. Inject styles into DOM
                    "css-loader", //1. Turns css into commonjs
                ]
            }
        ]
    }
});
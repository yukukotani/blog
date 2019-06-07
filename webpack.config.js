const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const Dotenv = require("dotenv-webpack");

const mode = process.env.NODE_ENV || "development";
const prod = mode === "production";
const dev = mode === "development";

module.exports = {
  entry: {
    bundle: ["./src/main.js"]
  },
  resolve: {
    extensions: [".mjs", ".js", ".svelte"]
  },
  output: {
    path: __dirname + "/public",
    filename: "[name].js",
    chunkFilename: "[name].[id].js"
  },
  module: {
    rules: [
      {
        test: /\.svelte$/,
        use: {
          loader: "svelte-loader",
          options: {
            emitCss: true,
            hotReload: true
          }
        }
      },
      {
        test: /\.css$/,
        use: [
          /**
           * MiniCssExtractPlugin doesn't support HMR.
           * For developing, use 'style-loader' instead.
           * */
          prod ? MiniCssExtractPlugin.loader : "style-loader",
          "css-loader"
        ]
      }
    ]
  },
  mode,
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css"
    }),
    dev
      ? new Dotenv()
      : new webpack.EnvironmentPlugin(["SPACE_ID", "ACCESS_TOKEN"])
  ],
  devtool: prod ? false : "source-map",
  devServer: {
    historyApiFallback: true,
  }
};

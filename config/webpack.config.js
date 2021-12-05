const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");

const tmxMoon = {
  mode: "development",
  module: {
    rules: [
      {
        test: /\.styl$/,
        use: ["style-loader", "css-loader", "stylus-loader"],
      },
      {
        test: /\.(js|jsx|tsx|ts)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
    ],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "public"),
    },
    compress: true,
    port: process.env.PORT || 3005,
    hot: true,
  },
  resolve: {
    extensions: ["", ".js", ".jsx", ".tsx", ".ts"],
  },
  plugins: [
    new htmlWebpackPlugin({
      template: "./src/index.html",
      filename: "index.html",
    }),
  ],
};

module.exports = tmxMoon;

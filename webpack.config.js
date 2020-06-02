const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const Autoprefixer = require("autoprefixer");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (env, options) => {
  const isProduction = options.mode === "production";
  const publicDir = isProduction ? "https://github-pages-here/" : "/";

  return {
    entry: `${path.join(__dirname, "./src")}/js`,
    output: {
      filename: "js/[name].[hash].js",
      path: path.join(__dirname, "./dist"),
      publicPath: publicDir,
    },
    module: {
      rules: [
        {
          test: /\.scss$/,
          use: [
            "style-loader",
            "css-loader",
            {
              loader: "sass-loader",
              options: {
                sourceMap: true,
                data: "@import './src/styles/variables';",
                includePaths: [path.join(__dirname, "src")],
              },
            },
          ],
        },
        {
          test: /\.(png|svg|jpg|gif)$/,
          loader: "file-loader",
          exclude: [/fonts/, /static/],
          options: {
            name: "./img/[name].[ext]",
            publicPath: "../",
          },
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/,
          exclude: [/blocks/, /img/],
          use: {
            loader: "file-loader",
            options: {
              name: "./fonts/[name].[ext]",
              publicPath: "../",
            },
          },
        },
        {
          test: /\.pug$/,
          loaders: [
            {
              loader: "html-loader",
            },
            {
              loader: "pug-html-loader",
              options: {
                pretty: true,
              },
            },
          ],
        },
      ],
    },
    devServer: {
      contentBase: "./dist",
      port: 3000,
      overlay: {
        warnings: true,
        errors: true,
      },
      watchOptions: {
        ignored: /node_modules/,
      },
    },
    plugins: [
      Autoprefixer,

      new MiniCssExtractPlugin({
        filename: "./css/[name].[hash].css",
      }),

      new HtmlWebpackPlugin({
        filename: "index.html",
        template: "./src/pages/index.pug",
      }),
    ],
  };
};

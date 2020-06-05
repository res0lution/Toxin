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
          test: /\.(sa|sc|c)ss$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
            },
            {
              loader: "css-loader",
            },
            {
              loader: "sass-loader",
              options: {
                sourceMap: true,
                prependData: "@import './src/sass/variables';",
                sassOptions: {
                  includePaths: [path.join(__dirname, "src")],
                },
              },
            },
          ],
        },
        {
          test: /\.(png|jpg|gif|svg)$/,
          loader: "file-loader",
          exclude: [/fonts/, /static/],
          options: {
            name: "./img/[name].[ext]",
            publicPath: "../",
          },
        },
        {
          test: /\.(eot|svg|ttf|woff|woff2)$/,
          exclude: [/blocks/, /img/, /static/],
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
          loader: "pug-loader",
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
    devtool: isProduction ? false : "eval-sourcemap",
    plugins: [
      Autoprefixer,

      new MiniCssExtractPlugin({
        filename: "./css/[name].[hash].css",
      }),

      new HtmlWebpackPlugin({
        filename: "index.html",
        template: "./src/pages/registration/registration.pug",
      }),

      new HtmlWebpackPlugin({
        filename: "sign-in.html",
        template: "./src/pages/sign-in/sign-in.pug",
      }),
    ],
  };
};

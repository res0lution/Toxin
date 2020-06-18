const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const Autoprefixer = require("autoprefixer");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require("webpack");

module.exports = (env, options) => {
  const isProduction = options.mode === "production";
  const publicDir = "/";

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
          exclude: [/components/, /img/, /static/],
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
        {
          test: /\.js$/,
          loader: "babel-loader",
          exclude: "/node_modules/",
        },
        {
          test: /\.(svg|png|ico|xml|json)$/,
          exclude: [/fonts/, /components/, /img/, /node_modules/],
          use: [
            {
              loader: "file-loader",
              options: {
                name: "./[name].[ext]",
                publicPath: "../",
              },
            },
          ],
        },
      ],
    },
    resolve: {
      extensions: [".js", ".jsx", ".scss"],
      alias: {
        "./dependencyLibs/inputmask.dependencyLib":
          "./dependencyLibs/inputmask.dependencyLib.jquery",
      },
    },
    optimization: {
      splitChunks: {
        cacheGroups: {
          vendor: {
            name: "vendors",
            test: /node_modules/,
            chunks: "all",
            enforce: true,
          },
        },
      },
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

      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "window.jQuery": "jquery",
      }),

      new MiniCssExtractPlugin({
        filename: "./css/[name].[hash].css",
      }),

      new HtmlWebpackPlugin({
        filename: "index.html",
        template: "./src/pages/index.pug",
      }),

      new HtmlWebpackPlugin({
        filename: "./cards.html",
        template: "./src/pages/cards/cards.pug",
      }),

      new HtmlWebpackPlugin({
        filename: "./colors-and-type.html",
        template: "./src/pages/colors-and-type/colors-and-type.pug",
      }),

      new HtmlWebpackPlugin({
        filename: "./form-elements.html",
        template: "./src/pages/form-elements/form-elements.pug",
      }),

      new HtmlWebpackPlugin({
        filename: "./headers-and-footers.html",
        template: "./src/pages/headers-and-footers/headers-and-footers.pug",
      }),

      new HtmlWebpackPlugin({
        filename: "./landing-page.html",
        template: "./src/pages/landing-page/landing-page.pug",
      }),

      new HtmlWebpackPlugin({
        filename: "./registration.html",
        template: "./src/pages/registration/registration.pug",
      }),
    ],
  };
};

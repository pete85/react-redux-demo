const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpackBundleAnalyzer = require("webpack-bundle-analyzer");
const dotenv = require("dotenv");

// Load environment variables from .env file
dotenv.config();

process.env.NODE_ENV = "production";
module.exports = {
    mode: "production",
    target: "web",
    devtool: "source-map",
    entry: "./src/index",
    output: {
        path: path.resolve(__dirname, "build"),
        publicPath: "/",
        filename: "bundle.js"
    },
    stats: "minimal",
    plugins: [
        // Display bundle stats
        new webpackBundleAnalyzer.BundleAnalyzerPlugin({analyzerMode: "static"}),

        new MiniCssExtractPlugin({
            filename: "[name].[contenthash].css"
        }),

        new webpack.DefinePlugin({
            "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV),
            "process.env.BASE_URL": JSON.stringify(process.env.BASE_URL) // Inject BASE_URL from .env
        }),

        new HtmlWebpackPlugin({
            template: "src/index.html",
            favicon: "src/favicon.ico",
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeRedundantAttributes: true,
                useShortDoctype: true,
                removeEmptyAttributes: true,
                removeStyleLinkTypeAttributes: true,
                keepClosingSlash: true,
                minifyJS: true,
                minifyCSS: true,
                minifyURLs: true
            }
        }),

        new CopyWebpackPlugin({
            patterns: [
                {from: '_redirects', to: ''}
            ]
        })
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ["babel-loader", "eslint-loader"]
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "postcss-loader",
                    "sass-loader"
                ]
            },
            {
                test: /(\.css)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: {sourceMap: true}
                    },
                    {
                        loader: "postcss-loader",
                        options: {
                            postcssOptions: {
                                plugins: [require("cssnano")]
                            },
                            sourceMap: true
                        }
                    }
                ]
            }
        ]
    }
};

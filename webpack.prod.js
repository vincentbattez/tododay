const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const glob = require('glob-all');

const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const config = require("./compile.config");

module.exports = merge(common, {
  module: {
    // SASS
    rules: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [ // use sass + css loader
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1,
              }
            },
            {
              loader: 'postcss-loader',
              options: {
                ident: 'postcss',
                plugins: (loader) => [
                  require('autoprefixer')(),
                  require('css-mqpacker')(),
                ]
              }
            },
            {
              loader: 'sass-loader',
            },
          ],
        })
      },
      {
        enforce: "pre",
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "eslint-loader",
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      { 
        test: /\.(gif|png|jpe?g|svg)$/i, 
        use: [
          {
            loader: 'image-webpack-loader',
            options: {
              options: {
                mozjpeg: {
                  progressive: true, 
                  quality: 65 
                },
                // optipng.enabled: false will disable optipng 
                optipng: {
                  enabled: true,
                },
                pngquant: {
                  quality: '65-90',
                  speed: 4
                },
                gifsicle: {
                  interlaced: false,
                },
              }
            },
          },
        ],
      },
    ]
  },
  plugins: [
    new UglifyJsPlugin({}),
  ],
});
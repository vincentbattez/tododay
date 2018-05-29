const ExtractTextPlugin = require("extract-text-webpack-plugin");

const config = require("./compile.config");

module.exports = {
  entry: [
    'babel-polyfill',     // ES6
    config.srcMain_JS,    // main JS
    config.srcMain_SCSS   // main CSS
  ],
  output: {
    path: config.distPath,      // destination : voir compile.config
    filename: config.bundle_JS  // JS bundle
  },
  externals: {
    jquery: 'jQuery'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          {
            loader : 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'img/',
            },
          },
        ],
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({ // Extrait le CSS du JS dans un fichier CSS externe
      filename: config.bundle_CSS,
      allChunks: true
    }),
  ],
}
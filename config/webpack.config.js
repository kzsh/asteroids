const path = require('path');

const BASE_PATH = path.join(__dirname, '..');

const PATHS = {
  app: `${BASE_PATH}/app/javascript/asteroids/app.js`,
  dist: `${BASE_PATH}/dist`,
  html: `${BASE_PATH}/app/html/index.html`,
  css: `${BASE_PATH}/app/stylesheets/app.scss`
};

module.exports = {

  entry: {
    javascript: PATHS.app,
    html: PATHS.html
  },

  output: {
    path: PATHS.dist,
    publicPath: '/',
    filename: 'bundle.js'
  },

  devServer: {
    contentBase: PATHS.dist
  },

  eslint: {
    emitWarninig: true
  },

  module: {
    preloaders: [
      {
        test: /\.js$/,
        loaders: ['eslint-loader'],
        exclude: /node_modules/
      }
    ],

    loaders: [
      {
        test: /\.html$/,
        loader: 'file?name=[name].[ext]'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['react-hot-loader', 'babel-loader']
      },
      {
        test: /\.s[ca]ss$/,
        loaders: ['style', 'css', 'sass']
      }
    ]
  }

};

const path = require('path');

const config = {
  devtool: 'source-map',
  cache: true,
  target: 'web',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
    ]
  }
};

module.exports = config;

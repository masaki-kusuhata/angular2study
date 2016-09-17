'use strict';
let path = require('path');

module.exports = {
  entry: {
    'bootstrap': './app/main.ts'
  },

  output: {
    path: './bin',
    filename: '[name].bundle.js'
  },

  module: {
    loaders: [
      {
        test: /\.ts$/,
        loader: 'ts-loader',
        query: {
          configFileName: 'tsconfig.json'
        },
      }
    ]
  },

  resolve: {
    root: [ path.join(__dirname, 'src') ],
    extensions: ['', '.ts', '.js']
  },

  devtool: 'source-map'
};

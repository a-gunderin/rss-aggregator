import HtmlWebpackPlugin from 'html-webpack-plugin';

export default {
  entry: ['babel-polyfill', './main/index.js'],
  devServer: {
    open: true,
    host: 'localhost',
  },
  mode: process.env.NODE_ENV || 'development',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i,
        loader: 'babel-loader',
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
        type: 'asset',
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',
      minify: true,
    }),
  ],
};

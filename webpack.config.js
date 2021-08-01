const path = require('path');

module.exports = {
  entry: './src/js/index.ts',
  watch:true,
  module: {
    rules: [
      {
        test: /\.ts$/,
        include: [path.resolve(__dirname, 'src/js')],
        use: 'ts-loader',
      },
      {
        test:/\.scss$/,
        include: [path.resolve(__dirname, 'src/scss')],
        use:['style-loader' ,'css-loader','sass-loader']
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  devtool: 'eval-source-map',
  output: {
    publicPath: 'public',
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
  },
};
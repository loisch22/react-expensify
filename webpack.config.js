// webpack plugin for styles - extract-text-webpack-plugin
// checks bundle.js for files that match test
// node uses require not import
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = (env) => {
  const isProduction = env === 'production';
  const CSSExtract = new ExtractTextPlugin('styles.css');

  return {
    entry: './src/app.js',
    output: {
      path: path.join(__dirname, 'public'),
      filename: 'bundle.js'
    },
    module: {
      rules: [{
        loader: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      }, {
        //? means s is optional
        test: /\.s?css$/,
        // extract defines how we want it to run
        // told webpack to extract stuff
        use: CSSExtract.extract({
          use: [
            'css-loader',
            'sass-loader'
          ]
        })
      }]
    },
    // successfully extract styles into own files 
    plugins: [
      CSSExtract
    ],
    devtool: isProduction ? 'source-map' : 'cheap-module-eval-source-map',
    devServer: {
      contentBase: path.join(__dirname, 'public'),
      //tells dev-server we will handle routing via client-side code
      historyApiFallback: true
    }
  };
};

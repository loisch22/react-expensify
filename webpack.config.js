const path = require('path');

// export as function instead of object
// webpack.js.org - exporting a function
// function gets called with env - tells if dev or prod

module.exports = (env) => {
  // build:dev env is undefined - optimize webpack build
  const isProduction = env === 'production';

  console.log('env', env);
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
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      }]
    },
    // source-map takes more time to build, is external file
    // webpack devtools documentation for more info on source-map - decreases file size
    // bundle.js size is size for most users - if user opens devtools bundle.js.map size is loaded 
    devtool: isProduction ? 'source-map' : 'cheap-module-eval-source-map',
    devServer: {
      contentBase: path.join(__dirname, 'public'),
      //tells dev-server we will handle routing via client-side code
      historyApiFallback: true
    }
  };
};

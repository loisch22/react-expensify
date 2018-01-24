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
    // takes about 5mb - opt for slower version - build will be slower for production - only need it to be fast for dev since making changes frequently
    // new prod source map = external huge file but only loads when devtools are open
    devtool: 'cheap-module-eval-source-map',
    devServer: {
      contentBase: path.join(__dirname, 'public'),
      //tells dev-server we will handle routing via client-side code
      historyApiFallback: true
    }
  };
};

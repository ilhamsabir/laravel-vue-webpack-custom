let path = require('path')
let webpack = require('webpack')
let isProd = process.env.NODE_ENV === 'production'

// entries
let entries = {
  "builder": "./protected/resources/assets/js/app.js"
}

// output
let outputs =  {
  path: path.resolve(__dirname, 'assets/js'),
  // publicPath: isProd ? '/app/' : `/app/`,
  publicPath: '/app/',
	filename: isProd ? 'prod/[name].[hash].bundle.js' : 'build/[name].bundle.js',
	chunkFilename: isProd ? '[id].[hash].bundle.js' : '[id].bundle.js'
  // path: path.resolve(__dirname, 'assets/js'),
  // publicPath: '/app/',
  // filename: 'build/[name].bundle.js',
  // chunkFilename: '[id].bundle.js',
}

// plugins
let plugins = []

// set devtools
let devtools;

// check NODE_ENV prod or dev
if (isProd) {

  // new devtools
  devtool = '#source-map'

  // set new plugin uglifyjs
  plugins.push(new webpack.optimize.UglifyJsPlugin({
    compress: {
        warnings: false,
        screw_ie8: true,
        conditionals: true,
        unused: true,
        comparisons: true,
        sequences: true,
        dead_code: true,
        evaluate: true,
        if_return: true,
        join_vars: true
    },
    output: {
        comments: false
    }
  }))

  // set new plugin loader
  plugins.push(new webpack.LoaderOptionsPlugin({
    minimize: true
  }))
} else {

  // new devools
  devtool = '#eval-source-map'
}

module.exports = {
  entry: entries,
  output: outputs,
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
          }
          // other vue-loader options go here
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
          test: /\.css$/,
          loader: 'style-loader!css-loader'
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      }
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true
  },
  performance: {
    hints: false
  },
  plugins: plugins,
  devtool: devtools
}

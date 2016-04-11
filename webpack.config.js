const path = require('path');

const basePath = path.resolve(__dirname);

const config = {
  paths: {
    src: path.join(basePath, './src/main/webapp/js'),
    dist: path.join(basePath, './target/webpack')
  }
}

console.log('config', config)

module.exports = {
  // `entry` is a hash -> several bundles with the same config are defined
  entry: {
    main: path.join(config.paths.src, './main.js'),
    admin: path.join(config.paths.src, './admin-main.js')
  },
  output: {
    path: config.paths.dist,
    // special bracketed filename because we produce several bundles
    filename: '[name].bundle.js',
    chunkFilename: '[id].chunk.js'
  },
  devServer: {
    inline: true,
    port: 8181
  },
  module: {
    preLoaders: [
      {
        test: /\.js$/, // includes js / jsx files
        exclude: /node_modules/,
        loader: 'eslint'
      }
    ],
    loaders: [
      { // babel loader for react / es6
        test: /\.(js|jsx)$/, // includes js / jsx files
        exclude: /node_modules/, // excludes npm files
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
  resolve: {
    root: config.paths.src,
    moduleDirectories: ['node_modules'], // by default, also searches bower files
    extensions: ['', '.js', '.jsx'] // by default, weird extensions + no jsx
  }
}
console.log('resolve jsHome', path.resolve('.'))

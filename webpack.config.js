const webpack = require('webpack')
const path = require('path')
const mode = process.env.NODE_ENV || 'development'

module.exports = {
  mode,
  target: ['es3'],
  entry: {
    rename_artboards: ['extendscript-es5-shim', 'extendscript-es6-shim', path.resolve(__dirname, 'src/rename-artboards.ts')],
    add_artboard_name: ['extendscript-es5-shim', 'extendscript-es6-shim', path.resolve(__dirname, 'src/add-artboard-name.ts')],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    chunkFormat: 'array-push'
  },
  module: {
    rules: [
      {
        test: /\.(js|ts)$/,
        use: ['babel-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  plugins: [
    new webpack.BannerPlugin({
      banner: '#target illustrator\n#targetengine script',
      raw: true
    })
  ],
  devtool: false,
}
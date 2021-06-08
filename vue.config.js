
const webpack = require('webpack')
const CompressionWebpackPlugin = require('compression-webpack-plugin')
const { proxy, prependData, productionGzipExtensions } = require('./config')

module.exports = {
  outputDir: 'dist',
  productionSourceMap: false,
  /* devServer: {
    open: true,
    proxy
  }, */
  configureWebpack: {
    plugins: [
      new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
      new CompressionWebpackPlugin({
        algorithm: 'gzip', // 压缩算法
        test: new RegExp('\\.(' + productionGzipExtensions.join('|') + ')$'),
        threshold: 10240,
        minRatio: 0.8
      }),
      new webpack.optimize.LimitChunkCountPlugin({
        maxChunks: 10,
        minChunkSize: 100
      })
    ]
  },
  /* 配置scss变量 */
  css: {
    loaderOptions: {
      sass: {
        prependData
      }
    }
  }
}

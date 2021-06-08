module.exports = {
  proxy: {
    '/api': {
      target: '***',
      ws: true,
      changeOrigin: true
    }
  },
  prependData: `
    @import "@/styles/bem.scss";
  `,
  productionGzipExtensions: ['js', 'css']
}

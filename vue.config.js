module.exports = {
    devServer: {
      proxy: {
        '/api': {
          target: 'https://localhost:8080/api/', //对应自己的接口
          changeOrigin: true,
          ws: true,
          pathRewrite: {
            '^/api': ''
          }
        }
      }
    }
  }
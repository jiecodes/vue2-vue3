module.exports = {
  transpileDependencies: true,
  // 开启代理服务器 (方式一)
  // devServer: {
  //   proxy: 'http://localhost:8000'
  // }
  
  // 方式二
  devServer: {
    proxy: {
      // 前缀
      '/aa': {
        target: 'http://localhost:8000',
        // 发送给服务器时 去掉开头添加的前缀 /aa 
        pathRewrite: {'^/aa':''},
        ws: true, 
        changeOrigin: true
      },
      // 上面简写
      // '/foo': {
      //   target: '<other_url>'
      // }
    }
  }

}

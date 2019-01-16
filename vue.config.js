module.exports = {
  lintOnSave:false,//是否使用eslint
  productionSourceMap:false,
  devServer:{
    open:true,
  },
  // 修改 src 目录 为 examples 目录
  pages: {
    index: {
      entry: 'examples/main.js',
      template: 'public/index.html',
      filename: 'index.html'
    }
  }
}
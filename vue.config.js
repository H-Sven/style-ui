const path = require('path');
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
  },
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [
        path.resolve(__dirname, './static/colorConfig.less'),
        path.resolve(__dirname, './static/animation.less'),
      ]
    }
  }
}
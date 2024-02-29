const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  lintOnSave: false,
  transpileDependencies: true,
  publicPath: '',//github仓库名
  assetsDir: '',//同上，否则访问不到静态资源
  outputDir:"dist"
})

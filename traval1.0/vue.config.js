const path = require("path");
function resolve(dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  lintOnSave: true,
  // 构建输出目录
  outputDir: 'dist',
  // 静态资源目录 (js, css, img, fonts)
  assetsDir: 'assets', 
  // 运行时版本是否需要编译
  runtimeCompiler: true, 
  // 默认babel-loader忽略mode_modules，这里可增加例外的依赖包名
  transpileDependencies: [], 
  // 是否在构建生产包时生成 sourceMap 文件，false将提高构建速度
  productionSourceMap: false, 
  //这个是配置路径的
  chainWebpack: (config)=>{
        config.resolve.alias
            .set('@', resolve('src'))
            .set('assets',resolve('src/assets'))
            .set('components',resolve('src/components'))
            .set('common',resolve('src/common'))
  },
  // 配置样式
  css: {
     // 是否开启支持 foo.module.css 样式
    modules: false,

    // 是否使用 css 分离插件 ExtractTextPlugin，采用独立样式文件载入，不采用 <style> 方式内联至 html 文件中
     extract: true,

    // 是否构建样式地图，false 将提高构建速度
    sourceMap: false,

    // css预设器配置项
    loaderOptions: {
    //    sass: {
    //        // @/ is an alias to src/
    //        // so this assumes you have a file named `src/variables.scss`
    //        data: `@import "/src/assets/styles/variables.scss";`
    //      },
    },
  },
  // 构建时开启多进程处理 babel 编译
  parallel: require('os').cpus().length > 1, 
}
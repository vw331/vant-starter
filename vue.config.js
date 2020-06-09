const server = require('./mock.server')

module.exports = {
  configureWebpack: config => {
    console.log(config)
    console.log(process.env.NODE_ENV)
  },
  devServer: {
    disableHostCheck: true,
    before: server,
    host: '0.0.0.0',
    port: 9001,
    proxy: { //配置跨域
      '/api': {
        ws: true,
        target: 'http://192.168.1.3:8080/cdkj',
        changeOrigin: true
      }
    }
  },
  css: {
    loaderOptions: {
      // 给 sass-loader 传递选项
      sass: {
        // @/ 是 src/ 的别名
        // 所以这里假设你有 `src/variables.sass` 这个文件
        // 注意：在 sass-loader v7 中，这个选项名是 "data"
        prependData: `@import "~@/style/variables.sass"`
      },
      // 默认情况下 `sass` 选项会同时对 `sass` 和 `scss` 语法同时生效
      // 因为 `scss` 语法在内部也是由 sass-loader 处理的
      // 但是在配置 `data` 选项的时候
      // `scss` 语法会要求语句结尾必须有分号，`sass` 则要求必须没有分号
      // 在这种情况下，我们可以使用 `scss` 选项，对 `scss` 语法进行单独配置
      scss: {
        prependData: `@import "~@/style/variables.scss";`
      },
      // 给 less-loader 传递 Less.js 相关选项
      less: {
        modifyVars: {  //这里参看https://youzan.github.io/vant/#/zh-CN/theme
          // 直接覆盖变量
          //'@green': 'green',
          // 或者可以通过 less 文件覆盖（文件路径为绝对路径）
          hack: `true; @import "~@/style/vant.variables.less";`,
        },
      },
      postcss: {
        plugins: [require('tailwindcss'), require('autoprefixer')]
      }
    }
  }
}

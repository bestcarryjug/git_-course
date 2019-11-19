const path = require('path')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
function resolve(dir) {
  return path.join(__dirname, dir)
}
const setJsPath = config => {
  if (process.env.NODE_ENV === 'production') { //配置打包后js路径
    const isLegacyBundle = process.env.VUE_CLI_MODERN_MODE && !process.env.VUE_CLI_MODERN_BUILD
    const filename = getAssetPath(
      assetsDir,
      `js/[name]${isLegacyBundle ? `-legacy` : ``}${filenameHashing ? '.[contenthash:8]' : ''}.js`
    )
    config.mode('production').devtool(productionSourceMap ? 'source-map' : false).output.filename(filename).chunkFilename(filename)
  }
}
module.exports = {
  lintOnSave: true,
  chainWebpack: (config) => {
    config.resolve.symlinks(true)
    setJsPath(config)
    config.module
      .rule('css')
      .test(/\.css$/)
      .oneOf('vue')
      .resourceQuery(/\?vue/)
      .use('px2rem')
      .loader('px2rem-loader')
      .options({
        remUnit: 37.5
      })


  },

  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          require('postcss-plugin-px2rem')({
            rootValue: 37.5, // 换算基数， 默认100  ，这样的话把根标签的字体规定为1rem为50px,这样就可以从设计稿上量出多少个px直接在代码中写多上px了。
            // unitPrecision: 5, //允许REM单位增长到的十进制数字。
            // propWhiteList: [],  //默认值是一个空数组，这意味着禁用白名单并启用所有属性。
            propBlackList: ['font-size'], // 黑名单不转换的属性
            exclude: /(node_module)/, // 默认false，可以（reg）利用正则表达式排除某些文件夹的方法，例如/(node_module)\/如果想把前端UI框架内的px也转换成rem，请把此属性设为默认值
            // selectorBlackList: [/font-[0-9]+/], // 要忽略并保留为px的选择器
            // ignoreIdentifier: false,  //（boolean/string）忽略单个属性的方法，启用ignoreidentifier后，replace将自动设置为true。
            // replace: true, // （布尔值）替换包含REM的规则，而不是添加回退。
            mediaQuery: true, // （布尔值）允许在媒体查询中转换px。
            minPixelValue: 3 // 设置要替换的最小像素值(3px会被转rem)。 默认 0
          })
        ]
      },
    },
    extract: true //分离css
  },

  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [
        path.resolve(__dirname, './src/assets/css/common/common_variable.less'),
        path.resolve(__dirname, './src/assets/css/common/common_mixins.less'),
        path.resolve(__dirname, './src/assets/css/common/common_class.less')
      ]
    }
  },
  chainWebpack(config) { // 别名配置
    config.resolve.alias
      .set('images', resolve('src/assets/images'))
      .set('css', resolve('src/assets/css'))
  },
  publicPath: './',
  outputDir: 'dist',
  assetsDir: './static'

}

const path = require("path");
const fs = require("fs");

const appDirectory = fs.realpathSync(process.cwd()); // 获取当前根目录
const resolvePath = (relativePath) => path.resolve(appDirectory, relativePath);

module.exports = {
  appHtml: resolvePath("public/index.html"), // 模板html
  appBuild: resolvePath("dist"), // 打包目录
  appIndexJs: resolvePath("src/main.js"), // 入口js文件
  cssTreeShaking:[
    // 要做 CSS Tree Shaking 的路径文件
    resolvePath('src/*.html'), // 请注意，我们同样需要对 html 文件进行 tree shaking
    resolvePath('src/*.js') //后缀自己更改
  ],
  alias:{ //别名路径
     "@":  resolvePath('src'),
     'css':resolvePath('src/css')
  },
  dllPlugin:{
    output:resolvePath('dll'),
    manifestPath:resolvePath('dll/[name]-manifest.json'),
    dllJs:(src)=>{
      return resolvePath(`../dll/${src}.dll.js`)
    },
    manifestJson:(src)=>{
      return resolvePath(`../dll/${src}-manifest.json`)
    }
  }
};
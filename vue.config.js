module.exports= {
  configureWebpack:{
    resolve:{
      alias:{
        'assets':'@/assets',
        'common':'@/common',
        'component':'@/component',
        'network':'@/network',
        'views':'@/views',
      }
    }
  }
}

// const path = require("path");
// const resolve = dir => path.join(__dirname, dir);
// const IS_PROD = ["production", "prod"].includes(process.env.NODE_ENV);
//
// module.exports = {
//   chainWebpack: config => {
//     // 添加别名
//     config.resolve.alias
//       .set("@", resolve("src"))
//       .set("@assets", resolve("src/assets"))
//       .set("@components", resolve("src/components"))
//       .set("@views", resolve("src/views"))
//   }
// };

/*
 * @Description: 输入文件描述信息
 * @Author: liu-wb
 * @Date: 2022-01-17 11:02:33
 * @LastEditTime: 2022-01-17 11:18:59
 */

const path = require("path");
const resolve = (dir) => path.join(__dirname, dir);

module.exports = {
  devServer: {
    open: false,
    port: 3330,
    overlay: {
      warnings: false,
      errors: true,
    },
    proxy: {
      "/api": {
        target: `http://localhost:3333`,
        changeOrigin: true,
        pathRewrite: {
          "^/api": "",
        },
      },
    },
  },
  css: {
    loaderOptions: {
      // 这里的选项会传递给 css-loader
      sass: {
        prependData: `@import "@/styles/index.scss";
                       `,
      },
    },
  },
  configureWebpack: {
    resolve: {
      alias: {
        "@": resolve("src"),
        "~": resolve("src"),
      },
    },
  },
};

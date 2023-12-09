const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  // 设置正向代理服务器
  devServer: {
    proxy: "http://111.229.247.11:3000",
    // ws: false,
  },
});

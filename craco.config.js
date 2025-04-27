const path = require("path");
// 引入less插件
const CracoLessPlugin = require("craco-less");

const resolve = (pathname) => path.resolve(__dirname, pathname);
module.exports = {
  // less
  // webpack
  webpack: {
    alias: {
      "@": resolve("src"),
      "@components": resolve("src/components"),
      "@utils": resolve("src/utils"),
      "@api": resolve("src/api"),
      "@mui/styled-engine": "@mui/styled-engine-sc",
    },
  },
  // 配置less
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};

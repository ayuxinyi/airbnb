const modules = {};

// 1. 导入同级JS文件（不包括index.js自身）
const jsFiles = require.context("./", false, /^\.\/(?!index\.js).*\.js$/);
jsFiles.keys().forEach((fileName) => {
  const moduleName = fileName.replace(/^\.\/(.*?)\.js$/, "$1");
  modules[moduleName] = jsFiles(fileName).default;
});

// 2. 导入同级文件夹中的index.js
const folderIndexFiles = require.context("./", true, /^\.\/[^/]+\/index\.js$/);
folderIndexFiles.keys().forEach((fileName) => {
  const folderName = fileName.replace(/^\.\/([^/]+)\/index\.js$/, "$1");
  modules[folderName] = folderIndexFiles(fileName).default;
});
export default modules;

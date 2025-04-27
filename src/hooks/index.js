const modules = {};
// 动态导入当前目录下所有的 .js 文件（排除自身）
const context = require.context("./", false, /\.js$/); // 匹配规则
context.keys().forEach((fileName) => {
  if (fileName === "./index.js") return; // 跳过自己
  const moduleName = fileName.replace(/^\.\/(.*)\.js$/, "$1"); // 提取文件名（去掉 ./ 和 .js）
  const moduleContent = context(fileName); // 导入模块
  // 将模块内容挂载到 modules 对象
  modules[moduleName] = moduleContent.default || moduleContent;
});
export default modules; // 导出合并后的对象

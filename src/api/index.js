// index.js
const autoImport = (context) => {
  const keys = context.keys();
  const values = keys.map(context);

  return keys.reduce((modules, key, index) => {
    // 过滤掉当前 index.js 文件
    if (key === "./index.js") return modules;

    // 获取文件名（不带扩展名）
    const fileName = key.replace(/^\.\/(.*)\.\w+$/, "$1");

    // 如果是 index.js 文件，则使用目录名
    const moduleName = fileName === "index" ? key.split("/")[1] : fileName;

    // 获取模块内容（优先取 default 导出）
    const module = values[index].default || values[index];

    modules[moduleName] = module;
    return modules;
  }, {});
};

// 导入同级 .js 文件和子目录下的 index.js
const context = require.context(
  ".", // 当前目录
  true, // 包含子目录
  /^\.\/((.*\/index\.js)|(.*\.js))$/ // 匹配规则
);

// 自动导入所有匹配的文件
const apiCollection = autoImport(context);

// 导出所有模块
export default apiCollection;

/*
* 获取当前文件夹下的所有vue文件并导出
* */
const resultComps = {};
let requireComponent = require["context"](
    './', // 在当前目录下查找
    false, // 不遍历子文件夹
    /\.vue$/ // 正则匹配 以 .vue结尾的文件
);
requireComponent.keys().forEach(fileName => {
    let comp = requireComponent(fileName);
    resultComps[fileName.replace(/^\.\/(.*)\.\w+$/, '$1')] = comp.default
});
export default resultComps
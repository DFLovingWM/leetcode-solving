/**
 * 创建数组
 * @param {number[]} dimensions 从高到低，每一维的长度
 * @param {unknown} initValue 叶子结点的初始值(注意，不能是非基本类型)
 * @returns {Array} 新数组
 */
function arr({
  dimensions,
  initValue
}) {
  // 一次递归，就是一个维度
  function dfs(i) {
    if (i === dimensions.length) {
      return initValue;
    }
    return Array.from({ length: dimensions[i] }, () => dfs(i + 1));
  }

  return dfs(0);
}

module.exports = {
  arr
}

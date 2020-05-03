/**
 * 贪心
 */
var kthSmallest = function(mat, K) {
  const [m, n] = [mat.length, mat[0].length];
  // 初始化为第一行
  let currs = mat[0];
  // 开始迭代
  for (let i = 1; i < m; ++i) {
    const nexts = [];
    for (const x of currs) {
      for (const y of mat[i]) {
        nexts.push(x + y);
      }
    }
    // 排序
    nexts.sort((a, b) => a - b);
    // 维护最多K个（贪心）
    nexts.length = Math.min(K, nexts.length)
    currs = nexts;
  }
  return currs[K - 1];
};

module.exports = kthSmallest;
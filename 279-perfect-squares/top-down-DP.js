/**
 * Top-down DP
 * 
 * 时间：752ms
 */
var numSquares = function (n) {
  const cache = new Map()
  
  /**
   * 递归函数
   * @param {Number} n 目标和
   * @returns {Number} 组成和n的最小个数 
   */
  function dfs (n) {
    if (n === 0) return 0
    if (cache.has(n)) return cache.get(n)

    let res = Infinity
    for (let diff = 1; n - diff * diff >= 0; ++diff) {
      res = Math.min(res, dfs(n - diff * diff) + 1) // 取更小值
    }
    cache.set(n, res)
    return res
  }

  return dfs(n)
};

module.exports = numSquares
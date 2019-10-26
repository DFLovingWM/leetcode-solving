/**
 * Top-down DP
 */
var rob = function (nums) {
  const cache = new Map()

  /**
   * 递归函数：遍历第i个房子能获得的最大价值
   * @param {number} i 第i个房子
   * @returns {number} 最大金额
   */
  function dfs (i) {
    if (i >= nums.length) return 0
    if (cache.has(i)) return cache.get(i)

    const res = Math.max(dfs(i + 1), nums[i] + dfs(i + 2))
    cache.set(i, res)
    return res
  }

  return dfs(0)
}

module.exports = rob
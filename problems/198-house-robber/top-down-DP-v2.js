/**
 * Top-down DP（仿照树形DP的版本）
 */
var rob = function (nums) {
  const cache = new Map()

  /**
   * 递归函数：探索第i个房子，返回值分别为不偷、偷能获得的最大价值
   * @param {number} i 第i个房子
   * @returns {number[]} [不偷，偷]
   */
  function dfs (i) {
    if (i >= nums.length) return [0, 0]
    if (cache.has(i)) return cache.get(i)

    const noRob = Math.max(...dfs(i + 1))
    const rob = nums[i] + dfs(i + 1)[0]
    
    const res = [noRob, rob]
    cache.set(i, res)
    return res
  }

  return Math.max(...dfs(0))
}

module.exports = rob
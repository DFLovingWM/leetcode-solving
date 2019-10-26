/**
 * Top-down DP
 * 
 * 时间：O(N^2), 240ms
 */
var findTargetSumWays = function (nums, targetSum) {
  const cache = new Map()

  /**
   * 递归函数
   * @param number i 下一个下标
   * @param {number} sum 当前累积的和
   */
  function dfs (i, sum) {
    if (i === nums.length) {
      return sum === targetSum ? 1 : 0
    }

    const key = getKey(i, sum)
    if (cache.has(key)) return cache.get(key)

    let res = 0
    res += dfs(i + 1, sum + nums[i]) // 加
    res += dfs(i + 1, sum - nums[i]) // 减
    cache.set(key, res)
    return res
  }

  return dfs(0, 0)
};

function getKey (i, s) {
  return `${i}, ${s}`
}

module.exports = findTargetSumWays
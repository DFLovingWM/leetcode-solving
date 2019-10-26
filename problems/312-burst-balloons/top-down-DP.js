/**
 * Top-down DP：思考后序遍历，先递归、最后再戳爆，这样数组减少也不影响
 * 
 * 时间：O(N^3), 300ms
 */
var maxCoins = function (nums) {
  const cache = new Map()

  function getKey(left, right) {
    return `${left},${right}`
  }

  /**
   * 区间[left,right]的气球被戳破能获取的最大分数
   * @param {number} left 左边界（闭）
   * @param {number} right 右边界（闭）
   * @returns {number} 最大分数
   */
  function dfs(left, right) {
    if (left === right + 1) return 0
    
    const key = getKey(left, right)
    if (cache.has(key)) return cache.get(key)

    let res = 0
    for (let i = left; i <= right; ++i) {
      const tmp = dfs(left, i - 1) + // 1. 先戳爆i的左边半段
        dfs(i + 1, right) + // 2. 再戳爆i的右边半段
        nums[i] * (left - 1 >= 0 ? nums[left - 1] : 1) * (right + 1 < nums.length ? nums[right + 1] : 1) // 3. 最后戳i
      res = Math.max(res, tmp)
    }
    cache.set(key, res)
    return res
  }

  return dfs(0, nums.length - 1)
};

module.exports = maxCoins
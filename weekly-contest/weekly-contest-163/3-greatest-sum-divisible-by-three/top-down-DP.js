/**
 * Top-down DP
 * 
 * 时间：`O(N)`, 424ms
 */
var maxSumDivThree = function (nums) {
  const cache = new Map()

  /**
   * 递归函数：
   * 当前是第`i`个数字、到最后取余3为`mod`的最大和
   */
  function helper (i, mod) {
    if (i === nums.length) {
      if (mod === 0) {
        return 0
      } else {
        return -Infinity
      }
    }
    
    const key = `${i},${mod}`
    if (cache.has(key)) return cache.get(key)

    const noPick = helper(i + 1, mod) // 不取
    const pick = nums[i] + helper(i + 1, (mod + nums[i]) % 3) // 取
    const res = Math.max(noPick, pick) // 最终求最大和，所以这里要取更大者
    cache.set(key, res)
    return res
  }

  return helper(0, 0) // 从第0个数字出发，求余数为0的最大和
};

module.exports = maxSumDivThree
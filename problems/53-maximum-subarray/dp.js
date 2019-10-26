/**
 * 动态规划：
 * `dp[i]`表示以`i`结尾的子数组最大和
 * 
 * 时间：O(N), 80ms
 */
var maxSubArray = function(nums) {
  const n = nums.length
  const dp = Array.from({ length: n + 1 }, () => 0)
  let res = -Infinity

  for (let i = 1; i <= n; ++i) {
    dp[i] = Math.max(nums[i - 1], nums[i - 1] + dp[i - 1])
    res = Math.max(res, dp[i])
  }

  return res
};

module.exports = maxSubArray
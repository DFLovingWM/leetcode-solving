/**
 * Bottom-up DP：取余
 * 
 * 时间：O(N), 64ms
 */
var rob = function (nums) {
  const n = nums.length

  if (n === 0) return 0
  if (n === 1) return nums[0]

  return Math.max(
    helper(nums.slice(0, n - 1)),
    helper(nums.slice(1, n)),
  )
};

var helper = function (nums) {
  const n = nums.length
  const dp = new Array(n + 1).fill(0)

  dp[1] = nums[0]
  for (let i = 2; i <= n; ++i) {
    dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i - 1])
  }

  return dp[n]
};

module.exports = rob
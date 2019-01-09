/**
 * dp(i)表示前i个房子中能窃取的max
 * - 时间复杂度：O(N)
 * - 空间复杂度：O(N)
 */
function rob (nums) {
  if (nums.length === 0) return 0
  if (nums.length <= 2) return Math.max(...nums)

  // dp[i]表示前i个屋子能窃取的max
  let dp = Array.from({ length: nums.length + 1 }, _ => 0);
  [ dp[0], dp[1] ] = [ 0, nums[0] ];

  for (let i = 2; i <= nums.length; ++i) {
    dp[i] = Math.max(dp[i - 2] + nums[i - 1], dp[i - 1])
  }

  return dp[nums.length]
}

module.exports = rob
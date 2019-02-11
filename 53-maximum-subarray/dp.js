/**
 * DP:
 * dp[i] means max sum of subarray which ends at position [i].
 * 
 * T(N), S(N)
 */
var maxSubArray = function(nums) {
  let dp = Array.from({ length: nums.length + 1 }), result = -Infinity
  dp[0] = 0
  
  for (let i = 1; i <= nums.length; ++i) {
    dp[i] = Math.max(
      dp[i - 1] + nums[i - 1], // (1) Sum consecutive with this one
      nums[i - 1] // (2) Sum starting from here
    )

    result = Math.max(result, dp[i])
  }

  return result
}

module.exports = maxSubArray
/**
 * （Hint很有帮助了）
 * Circle给予了一个限制：head、tail变成相邻的，不能同时rob
 * 所以将Circle拆成两个Linear：
 * 1. house[0] ~ house[n-2]
 * 2. house[1] ~ house[n-1]
 * 
 * [60ms]
 */
function rob (nums) {
  if (nums.length === 0) return 0
  else if (nums.length === 1) return nums[0]

  return Math.max(
    robLinear(nums.slice(0, nums.length - 1)),
    robLinear(nums.slice(1, nums.length))
  )
}

function robLinear (nums) {
  let dp = Array.from({ length: nums.length + 1 }, _ => 0)
  dp[1] = nums[0]
  dp[2] = Math.max(nums[0], nums[1])

  for (let i = 2; i <= nums.length; ++i) {
    dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i - 1])
  }

  return dp[nums.length]
}

module.exports = rob
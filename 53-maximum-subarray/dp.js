/**
 * 设dp[i]为前i个元素的最大和
 */
var maxSubArray = function(nums) {
  const dp = Array.from({ length: nums.length + 1 }, () => 0)
  dp[0] = 0
  result = -Infinity
  for (let i = 1; i <= nums.length; ++i) {
    dp[i] = Math.max(nums[i - 1], dp[i - 1] + nums[i - 1])
    result = Math.max(result, dp[i])
  }
  return result
};

[
  [-2,1,-3,4,-1,2,1,-5,4]
].forEach(arr => {
  console.log(maxSubArray(arr))
})
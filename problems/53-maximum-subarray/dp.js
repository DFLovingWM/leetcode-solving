/**
 * DP
 */
var maxSubArray = function(nums) {
  const n = nums.length;
  // dp[i]：表示以`nums[i]`结尾的子数组的最大和
  const dp = new Array(n);
  dp[0] = nums[0];
  for (let i = 1; i < n; ++i) {
    dp[i] = Math.max(
      nums[i], // 1
      nums[i] + dp[i - 1] // 2
    );
  }
  return Math.max(...dp);
};
/**
 * DP
 */
var massage = function(nums) {
  const n = nums.length;
  // 这里的判断仅仅是对付LeetCode的白痴测试用例，并非重点
  if (n === 0) return 0;

  // dp[i]表示到nums[i]为止，最大的总分钟数
  const dp = Array.from({ length: n }, () => 0);
  // 初始值
  dp[0] = nums[0];
  // 迭代
  for (let i = 1; i < n; ++i) {
    dp[i] = Math.max(
      dp[i - 1], // 选择1：不接
      nums[i] + (i - 2 >= 0 ? dp[i - 2] : 0) // 选择2：接
    );
  }
  // 目标值
  return dp[n - 1];
};
/**
 * 动态规划：dp[i]表示经历前i个房子能获取的最大价值
 */
var rob = function (nums) {
  const n = nums.length;
  // 状态：dp[i]表示经历前i个房子能获取的最大价值
  const dp = Array.from({ length: n + 1 }, () => 0);
  // 迭代
  for (let i = 1; i <= n; ++i) {
    dp[i] = Math.max(
      dp[i - 1], // 不偷i
      nums[i - 1] + (i - 2 >= 0 ? dp[i - 2] : 0) // 偷i
    );
  }
  // 目标
  return dp[n];
};
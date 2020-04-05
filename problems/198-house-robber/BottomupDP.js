/**
 * 动态规划：dp[i][0/1]表示在前i个房间中，对最后一个房间进行不偷/偷的最大价值
 */
var rob = function (nums) {
  const n = nums.length;
  // dp[i][0/1]表示不偷/偷第i个房子能获取的最大价值
  const dp = Array.from({ length: n + 1 }, () => Array.from({ length: 2 }, () => 0));
  for (let i = 1; i <= n; ++i) {
    dp[i][0] = Math.max(
      dp[i - 1][0],
      dp[i - 1][1]
    );
    dp[i][1] = dp[i - 1][0] + nums[i - 1];
  }
  // 目标：根据状态定义，目标在dp[n]中。取最大值即可。
  return Math.max(dp[n][0], dp[n][1]);
};
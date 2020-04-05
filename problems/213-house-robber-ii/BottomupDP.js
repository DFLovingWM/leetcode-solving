/**
 * 动态规划：
 */
var rob = function (nums) {
  const n = nums.length;
  if (n === 1) return nums[0];
  return Math.max(
    robbing(nums.slice(0, n - 1)),
    robbing(nums.slice(1, n))
  );
};

// LeetCode 198
function robbing(nums) {
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
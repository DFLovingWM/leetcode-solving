/**
 * Bottom-up DP
 * 
 * 时间：O(N^2), 356ms
 * 空间：O(N^2), 46MB
 */
var maxSatisfaction = function (nums) {
  // 排序，让大的在后面。DP时需要递增系数(k)
  nums.sort((a, b) => a - b);

  const n = nums.length;
  // dp[i][k]表示在前`i`道菜中选`k`道烹饪的最大总和
  const dp = Array.from({ length: n + 1 }, () => Array.from({ length: n + 1 }, () => -Infinity));
  // 边界：无论有多少道菜(i)，如果只煮k=0道，收益肯定只是0
  for (let i = 0; i <= n; ++i) {
    dp[i][0] = 0;
  }
  // 迭代
  for (let i = 1; i <= n; ++i) {
    for (let k = 1; k <= i; ++k) {
      dp[i][k] = Math.max(
        dp[i - 1][k], // 不煮
        dp[i - 1][k - 1] + k * nums[i - 1] // 煮
      );
    }
  }
  // 目标
  return Math.max(...dp[n]);
};

module.exports = maxSatisfaction;
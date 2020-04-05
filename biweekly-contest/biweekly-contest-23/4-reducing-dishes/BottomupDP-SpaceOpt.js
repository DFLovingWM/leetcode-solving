/**
 * Bottom-up DP + 空间优化
 * 
 * 时间：O(N^2), 116ms
 * 空间：O(N), 35MB
 */
var maxSatisfaction = function (nums) {
  // 排序，让大的在后面。DP时需要递增系数(k)
  nums.sort((a, b) => a - b);

  const n = nums.length;
  // dp[k]表示选`k`道烹饪的最大总和
  const dp = Array.from({ length: n + 1 }, () => -Infinity);
  // 边界：如果只煮k=0道，收益肯定只是0
  dp[0] = 0;
  // 迭代
  for (let i = 1; i <= n; ++i) {
    for (let k = i; k >= 1; --k) { // 逆序更新
      dp[k] = Math.max(
        dp[k], // 不煮
        dp[k - 1] + k * nums[i - 1] // 煮
      );
    }
  }
  // 目标
  return Math.max(...dp);
};

module.exports = maxSatisfaction;
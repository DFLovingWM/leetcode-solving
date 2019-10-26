/**
 * Bottom-up DP：
 * 与【爬楼梯】思路一致，值由种类数变成最小和
 * dp[i]表示走到第i阶花费的最小价值，则有：
 * dp[i] = min(dp[i-1], dp[i-2]) + costs[i]
 * 
 * 时间：O(N)
 * 空间：O(N)
 */
var minCostClimbingStairs = function (costs) {
  const n = costs.length
  const dp = Array.from({ length: n }, () => Infinity)

  dp[0] = costs[0]
  dp[1] = costs[1]

  for (let i = 2; i < n; ++i) {
    dp[i] = Math.min(dp[i - 1], dp[i - 2]) + costs[i]
  }

  return Math.min(dp[n - 1], dp[n - 2])
};

module.exports = minCostClimbingStairs
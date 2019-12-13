/**
 * Bottom-up DP
 * 
 * 时间：`O(N)`, 72ms
 */
var maxProfit = function (prices) {
  const n = prices.length
  // dp[i][k]：第(i-1)天结束时【不持有(k===0)，持有(k===1)】的最大收益
  const dp = Array.from({ length: n + 1 }, () => Array.from({ length: 2 }, () => -Infinity))
  dp[0][0] = 0

  for (let i = 1; i <= n; ++i) {
    const today = prices[i - 1]

    // 今天不持有
    dp[i][0] = Math.max(
      dp[i - 1][0], // 昨天就不持有，今天不动
      dp[i - 1][1] + today, // 昨天持有，今天出手
    )

    // 今天持有
    dp[i][1] = Math.max(
      dp[i - 1][1], // 昨天就持有，今天不动
      dp[Math.max(i - 2, 0)][0] - today, // 之前不持有，今天入手（保证1天冷冻期，所以是从i-2而不是i-1推导而来）
    )
  }

  return Math.max(...dp[n])
};

module.exports = maxProfit;
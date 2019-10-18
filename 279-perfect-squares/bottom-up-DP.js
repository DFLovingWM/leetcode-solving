/**
 * Bottom-up DP：dp[n]表示组成n的最少个数
 * 
 * 时间：O(N^2), 228ms
 */
var numSquares = function (n) {
  const dp = Array.from({ length: n + 1 }, () => Infinity)
  dp[0] = 0

  for (let i = 1; i <= n; ++i) {
    for (let j = 1; i - j * j >= 0; ++j) {
      dp[i] = Math.min(dp[i], dp[i - j * j] + 1)
    }
  }

  return dp[n]
};

module.exports = numSquares
/**
 * Bottom-up DP
 * 
 * 时间：`O(N)`, 332ms
 */
var stoneGame = function (piles) {
  const n = piles.length
  // dp[i][j]表示“我”从[i:j]中取的最大收益
  // dp[i][j] = max(dp[i+1][j], dp[i][j-1])
  const dp = Array.from({ length: n }, () => Array.from({ length: n }, () => 0))

  for (let i = n - 1; i >= 0; --i) { // 逆序
    for (let j = i + 1; j < n; ++j) { // 顺序
      if ((j - i + 1) % 2 === 0) { // 偶数堆、我先手，则加
        dp[i][j] = Math.max(dp[i + 1][j] + piles[i], dp[i][j - 1] + piles[j])
      } else { // 奇数堆、我反手，则减
        dp[i][j] = Math.max(dp[i + 1][j] - piles[i], dp[i][j - 1] - piles[j])
      }
    }
  }

  return dp[0][n - 1] > 0 // 看纯收益是否大于0
};
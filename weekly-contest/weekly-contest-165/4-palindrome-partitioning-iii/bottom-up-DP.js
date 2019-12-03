/**
 * Bottom-up DP
 * 
 * 时间：`O(N^2 * K)`, 88ms
 * 空间：`O(NK)`
 */
var palindromePartition = function (text, K) {
  const n = text.length
  const costs = calc(text)
  // dp[i][k]表示`text[:i]`切成`k`个子串的最小变换
  const dp = Array.from({ length: n + 1 }, () => Array.from({ length: K + 1 }, () => Infinity))
  dp[0][0] = 0

  // for (let k = 1; k <= K; ++k) {
  //   for (let i = 1; i <= n; ++i) {
  //     for (let j = 0; j <= i - 1; ++j) {
  //       dp[i][k] = Math.min(dp[i][k], dp[j][k - 1] + costs[j][i - 1])
  //     }
  //   }
  // }

  for (let i = 1; i <= n; ++i) {
    for (let j = 0; j <= i - 1; ++j) {
      for (let k = 1; k <= K; ++k) {
        dp[i][k] = Math.min(dp[i][k], dp[j][k - 1] + costs[j][i - 1])
      }
    }
  }

  return dp[n][K]
};

function calc (S) {
  const n = S.length
  const dp = Array.from({ length: n }, () => Array.from({ length: n }, () => 0))
  for (let center = 0; center < n; ++center) {
    dp[center][center] = 0
    expand(S, dp, center - 1, center + 1)
  }
  for (let center = 0; center + 1 < n; ++center) {
    dp[center][center + 1] = S[center] === S[center + 1] ? 0 : 1
    expand(S, dp, center - 1, center + 2)
  }
  return dp
}

function expand (S, dp, i, j) {
  for (; i >= 0 && j < S.length; --i, ++j) {
    dp[i][j] = dp[i + 1][j - 1] + (S[i] === S[j] ? 0 : 1)
  }
}

module.exports = palindromePartition
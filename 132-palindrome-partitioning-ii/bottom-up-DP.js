/**
 * Bottom-up DP：
 * `dp[i]`表示`text[:i]`含有的回文子串(互斥)的最少数目
 * 
 * 时间：O(N^2), 164ms
 * 空间：O(N)
 */
var minCut = function (S) {
  const isPalindrome = getDP(S) // 预处理

  const n = S.length
  const dp = new Array(n + 1).fill(Infinity)

  dp[0] = 0

  for (let i = 1; i <= n; ++i) {
    for (let j = 0; j < i; ++j) {
      if (isPalindrome[j][i - 1]) {
        dp[i] = Math.min(dp[i], 1 + dp[j])
      }
    }
  }

  return dp[n] - 1
};

function getDP (text) {
  const n = text.length

  // dp[i][j]表示text[i:j]是否回文
  const dp = new Array(n).fill(0).map(() => new Array(n).fill(false))

  // 1个字符回文
  for (let i = 0; i < n; ++i) dp[i][i] = true
  // 0个字符回文
  for (let i = 1; i < n; ++i) dp[i][i - 1] = true

  // 迭代
  for (let i = n - 1; i >= 0; --i) {
    for (let j = i + 1; j < n; ++j) {
      if (dp[i + 1][j - 1] && text[i] === text[j]) {
        dp[i][j] = true
      }
    }
  }

  return dp
}

module.exports = minCut
/**
 * Top-down DP
 * 
 * 时间：O(N^2), 120ms
 */
var minCut = function (S) {
  const isPalindrome = getDP(S)
  const cache = new Map()

  /**
   * `S[i:]`切成回文子串所需的最少步数
   */
  function dfs (i) {
    if (i === S.length) return 0
    if (cache.has(i)) return cache.get(i)

    let res = Infinity
    for (let j = i; j < S.length; ++j) {
      if (isPalindrome[i][j]) {
        res = Math.min(res, 1 + dfs(j + 1)) // 关键：推导式
      }
    }
    cache.set(i, res)
    return res
  }

  return dfs(0) - 1
};

// 判断S是否是回文串
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
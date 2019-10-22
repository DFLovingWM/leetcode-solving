/**
 * 转化为求S与逆串S2的LCS
 * 
 * 时间：O(N^2), 204ms
 */
var longestPalindromeSubseq = function (S) {
  const S2 = [...S].reverse().join('')
  return getLCS(S, S2)
};

// 求【最长公共子序列】
function getLCS (A, B) {
  const n = A.length
  const dp = new Array(n + 1).fill(0).map(() => new Array(n + 1).fill(0))

  for (let i = 1; i <= n; ++i) {
    for (let j = 1; j <= n; ++j) {
      if (A[i - 1] === B[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1])
      }
    }
  }

  return dp[n][n]
}

module.exports = longestPalindromeSubseq
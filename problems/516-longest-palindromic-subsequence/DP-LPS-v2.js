/**
 * `dp[i][j]`表示`text[i:j]`中的LPS长度
 * 空间压缩版本
 * 
 * 时间：O(N^2), 148ms
 */
var longestPalindromeSubseq = function (S) {
  const n = S.length
  const dp = new Array(n).fill(0).map(() => new Array(n).fill(0))

  for (let i = n - 1; i >= 0; --i) { // 逆序
    dp[i][i] = 1

    for (let j = i + 1; j < n; ++j) { // 顺序
      if (S[i] === S[j]) {
        dp[i][j] = dp[i + 1][j - 1] + 2
      } else {
        dp[i][j] = Math.max(dp[i + 1][j], dp[i][j - 1])
      }
    }
  }

  return dp[0][S.length - 1]
};

module.exports = longestPalindromeSubseq
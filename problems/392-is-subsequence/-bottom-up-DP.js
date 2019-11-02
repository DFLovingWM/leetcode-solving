/**
 * DP解法：
 * `dp[i][j]`表示`S[:i]`是否是`T[:j]`的子序列
 */
var isSubsequence = function (S, T) {
  const [sLen, tLen] = [S.length, T.length]
  const dp = Array.from({ length: sLen + 1 }, () => Array.from({ length: tLen + 1 }, () => false))

  // 初始化
  for (let j = 0; j <= tLen; ++j) {
    dp[0][j] = true
  }

  // 迭代
  for (let i = 1; i <= sLen; ++i) {
    for (let j = 1; j <= tLen; ++j) {
      if (S[i - 1] === T[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1]
      } else {
        dp[i][j] = dp[i][j - 1] // 不相等时，实际上T增加的字符没用，于是只看`S[:i]`和`T[:j-1]`
      }
    }
  }

  return dp[sLen][tLen]
};

module.exports = isSubsequence
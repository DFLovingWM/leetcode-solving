/**
 * 动态规划：dp[i][j]表示text的前i个和pattern的前j个是否匹配
 * 
 * 时间：O(NM), 80ms
 */
var isMatch = function (text, pattern) {
  const T = text.length
  const P = pattern.length

  const dp = Array.from({ length: T + 1 }, () => {
    return Array.from({ length: P + 1 }, () => {
      return false
    })
  })
  dp[0][0] = true

  for (let i = 0; i <= T; ++i) { // text为空时(i=0)，结果也可能是true，所以要参与迭代
    for (let j = 1; j <= P; ++j) { // pattern为空时(j=0)，只有当text也为空结果才为true，这个已经初始化了，所以这里不必参与迭代
      if (pattern[j - 1] === '*') {
        dp[i][j] = dp[i][j-2] || // 匹配0个
          i > 0 && (text[i-1] === pattern[j-2] || pattern[j-2] === '.') && dp[i-1][j] // 匹配1个
      } else {
        dp[i][j] = i > 0 && dp[i-1][j-1] && (text[i-1] === pattern[j-1] || pattern[j-1] === '.')
      }
    }
  }

  return dp[T][P]
};

module.exports = isMatch
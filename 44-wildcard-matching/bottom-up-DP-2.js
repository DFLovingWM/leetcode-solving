/**
 * dp[i][j]：pattern[:i]是否能匹配text[:j]
 * 画一个二维图表帮助理解
 * 
 * 时间：O(NM), 556ms
 */
var isMatch = function (text, pattern) {
  const P = pattern.length
  const T = text.length

  const dp = Array.from({ length: P + 1 }, () => {
    return Array.from({ length: T + 1 }, () => {
      return false
    })
  })
  dp[0][0] = true

  for (let i = 1; i <= P; ++i) {
    if (pattern[i - 1] === '*') {
      dp[i][0] = dp[i - 1][0]
      for (let j = 1; j <= T; ++j) {
        dp[i][j] = dp[i - 1][j] || // 匹配0个
          dp[i][j - 1] // 匹配1个
      }
    } else if (pattern[i - 1] === '?') {
      dp[i][0] = false
      for (let j = 1; j <= T; ++j) {
        dp[i][j] = dp[i - 1][j - 1] // 前面能匹配即可
      }
    } else {
      dp[i][0] = false
      for (let j = 1; j <= T; ++j) {
        dp[i][j] = dp[i - 1][j - 1] && pattern[i - 1] === text[j - 1] // 前面能匹配、该字符也要匹配
      }
    }
  }

  return dp[P][T]
};

module.exports = isMatch
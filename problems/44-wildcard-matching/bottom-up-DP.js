/**
 * DP：设dp[i][j]为text[:i]、pattern[:j]是否能匹配
 * 
 * 时间：O(NM), 580ms
 */
var isMatch = function (text, pattern) {
  const dp = Array.from({ length: text.length + 1 }, () => {
    return Array.from({ length: pattern.length + 1 }, () => {
      return false
    })
  })
  dp[0][0] = true

  for (let i = 0; i <= text.length; ++i) {
    for (let j = 1; j <= pattern.length; ++j) {
      if (pattern[j - 1] === '*') {
        dp[i][j] = dp[i][j-1] || // 匹配0个
          i > 0 && dp[i-1][j] // 匹配1个
      } else {
        dp[i][j] = i > 0 && (text[i-1] === pattern[j-1] || pattern[j-1] === '?') && dp[i-1][j-1]
      }
    }
  }

  return dp[text.length][pattern.length]
};

module.exports = isMatch
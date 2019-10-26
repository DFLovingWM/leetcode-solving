/**
 * 求最长公共子序列
 * 
 * 时间：O(NM), 204ms
 */
var minDistance = function (A, B) {
  const dp = Array.from({ length: A.length + 1 }, () => {
    return Array.from({ length: B.length + 1 }, () => {
      return 0
    })
  })

  for (let i = 1; i <= A.length; ++i) {
    for (let j = 1; j <= B.length; ++j) {
      if (A[i - 1] === B[j - 1]) { // 字符相等
        dp[i][j] = dp[i - 1][j - 1] + 1
      } else {
        dp[i][j] = Math.max(
          dp[i - 1][j],
          dp[i][j - 1]
        )
      }
    }
  }

  const l = dp[A.length][B.length]
  return (A.length - l) + (B.length - l)
};

module.exports = minDistance
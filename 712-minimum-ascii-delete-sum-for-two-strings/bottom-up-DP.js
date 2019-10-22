/**
 * LCS解法：dp[i][j]表示A[:i]与B[:j]的最小删除
 * 
 * 时间：O(NM), 296ms
 */
var minimumDeleteSum = function (A, B) {
  const dp = Array.from({ length: A.length + 1 }, () => Array.from({ length: B.length + 1 }, () => Infinity))

  dp[0][0] = 0
  for (let i = 1; i <= A.length; ++i) dp[i][0] = dp[i - 1][0] + getCode(A[i - 1])
  for (let j = 1; j <= B.length; ++j) dp[0][j] = dp[0][j - 1] + getCode(B[j - 1])

  for (let i = 1; i <= A.length; ++i) {
    for (let j = 1; j <= B.length; ++j) {
      if (A[i - 1] === B[j - 1]) { // 相等，则不用删除
        dp[i][j] = dp[i - 1][j - 1]
      } else { // 不相等，取最小删除
        dp[i][j] = Math.min(
          dp[i - 1][j - 1] + getCode(A[i - 1]) + getCode(B[j - 1]), // 删除a、b
          dp[i - 1][j] + getCode(A[i - 1]), // 删除a
          dp[i][j - 1] + getCode(B[j - 1]) // 删除b
        )
      }
    }
  }

  return dp[A.length][B.length]
};

function getCode(ch) {
  return ch.charCodeAt(0)
}

module.exports = minimumDeleteSum
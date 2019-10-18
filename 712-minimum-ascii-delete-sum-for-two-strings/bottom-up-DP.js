/**
 * LCS解法：dp[i][j]表示A[:i]与B[:j]的最小删除
 * 
 * 时间：O(NM)
 */
var minimumDeleteSum = function (A, B) {
  const dp = Array.from({ length: A.length + 1 }, () => Array.from({ length: B.length + 1 }, () => Infinity))

  for (let i = 1; i <= A.length; ++i) {
    for (let j = 1; j <= B.length; ++j) {
      if (A[i - 1] === B[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + A[i - 1].charCodeAt(0)
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1])
      }
    }
  }

  let res = 0
  for (let i = 0; i < A.length; ++i) res += A[i].charCodeAt(0)
  for (let i = 0; i < B.length; ++i) res += B[i].charCodeAt(0)
  return res - 2 * dp[A.length][B.length]
};

module.exports = minimumDeleteSum
/**
 * 求最长公共子串，bottom-up DP解法
 * 
 * 时间：O(N^2), 288ms
 */
var findLength = function(A, B) {
  const dp = new Array(A.length + 1).fill(0).map(() => new Array(B.length + 1).fill(0))

  let res = 0

  for (let i = 1; i <= A.length; ++i) {
    for (let j = 1; j <= B.length; ++j) {
      if (A[i - 1] === B[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1 // 子串(子数组)不同于子序列。子串只能由上一个字符推导
        res = Math.max(res, dp[i][j])
      }
    }
  }

  return res
};

[
  [[1,2,3,2,1], [3,2,1,4,7]],
  [[0,1,1,1,1], [1,0,1,0,1]],
  [[1,0,0,0,1], [1,0,0,1,1]],
].forEach(input => {
  console.log(findLength(...input))
})

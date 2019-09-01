/**
 * 最长公共子串，DP解法：O(N^2)
 */
var findLength = function(A, B) {
  const dp = Array.from({ length: A.length + 1 }, () => {
    return Array.from({ length: B.length + 1 }, () => {
      return 0
    })
  })
  let max = 0
  for (let i = 1; i <= A.length; ++i) {
    for (let j = 1; j <= B.length; ++j) {
      if (A[i - 1] === B[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1
        max = Math.max(max, dp[i][j])
      }
    }
  }
  console.log(dp)
  return max
};

[
  [[1,2,3,2,1], [3,2,1,4,7]],
  [[0,1,1,1,1], [1,0,1,0,1]],
  [[1,0,0,0,1], [1,0,0,1,1]],
].forEach(input => {
  console.log(findLength(...input))
})

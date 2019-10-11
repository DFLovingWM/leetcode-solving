/**
 * dp[i][j]为以(i,j)为右下角的最大正方形的边长
 * 
 * 时间：O(MN), 104ms
 */
var maximalSquare = function (matrix) {
  const R = matrix.length
  if (R === 0) return 0
  const C = matrix[0].length

  const dp = Array.from({ length: R + 1 }, () => Array.from({ length: C + 1 }, () => 0))
  let res = 0

  for (let i = 1; i <= R; ++i) {
    for (let j = 1; j <= C; ++j) {
      if (matrix[i - 1][j - 1] === '1') { // 元素为1时，看是否能够扩展
        dp[i][j] = 1 + Math.min(dp[i - 1][j - 1], dp[i - 1][j], dp[i][j - 1])
        res = Math.max(res, dp[i][j])
      }
    }
  }

  return res * res
};

console.log(maximalSquare([
  ["1", "0", "1", "0", "0"],
  ["1", "0", "1", "1", "1"],
  ["1", "1", "1", "1", "1"],
  ["1", "0", "0", "1", "0"]
]))
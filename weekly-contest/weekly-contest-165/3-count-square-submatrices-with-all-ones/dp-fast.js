/**
 * DP：dp[x][y]表示以`(x-1, y-1)`为右下角的正方形的最大边长
 * 
 * 时间：`O(N^2)`, 164ms
 * 空间：`O(N^2)`, 41.4MB
 */
var countSquares = function (matrix) {
  const [R, C] = [matrix.length, matrix[0].length]
  // dp[x][y]表示以`(x-1, y-1)`为右下角的正方形的最大边长
  const dp = Array.from({ length: R + 1 }, () => Array.from({ length: C + 1 }, () => 0))
  let res = 0

  for (let i = 1; i <= R; ++i) {
    for (let j = 1; j <= C; ++j) {
      if (matrix[i - 1][j - 1] === 1) {
        // 关键：这里取三者中的min，能保证其它两者在min的小正方形内都为1
        dp[i][j] = Math.min(dp[i - 1][j - 1], dp[i - 1][j], dp[i][j - 1]) + 1
        // 直接累加（不必+1+1+1）
        res += dp[i][j]
      }
    }
  }

  return res
};

module.exports = countSquares

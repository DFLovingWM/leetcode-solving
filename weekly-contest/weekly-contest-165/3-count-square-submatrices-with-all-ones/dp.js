/**
 * DP：dp[x][y]表示以`(x,y)`为右下角的正方形的最大边长
 * 
 * 参考：https://leetcode-cn.com/problems/count-square-submatrices-with-all-ones/solution/tong-ji-quan-wei-1-de-zheng-fang-xing-zi-ju-zhen-f/
 * 
 * 时间：`O(N^3)`, 152ms
 * 空间：`O(N^2)`, 41.3MB
 */
var countSquares = function (matrix) {
  const [R, C] = [matrix.length, matrix[0].length]
  // dp[x][y]表示以`(x,y)`为右下角的正方形的最大边长
  const dp = Array.from({ length: R }, () => Array.from({ length: C }, () => 0))
  let res = 0

  for (let i = 0; i < R; ++i) {
    for (let j = 0; j < C; ++j) {
      if (matrix[i][j] === 1) {
        dp[i][j] = 1
        ++res

        // 遍历边长
        const maxK = Math.min(i, j) + 1
        for (let k = 2; k <= maxK; ++k) {
          if (dp[i - 1][j] >= k - 1 && dp[i][j - 1] >= k - 1 && dp[i - 1][j - 1] >= k - 1) {
            dp[i][j] = k
            ++res
          } else {
            break
          }
        }
      }
    }
  }

  return res
};

module.exports = countSquares
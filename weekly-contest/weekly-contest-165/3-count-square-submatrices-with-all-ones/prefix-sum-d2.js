/**
 * 二维前缀和（容斥原理）
 * 
 * 时间：`O(N^3)`, 152ms
 * 空间：`O(N^2)`, 41.2MB
 */
var countSquares = function (matrix) {
  const [R, C] = [matrix.length, matrix[0].length]

  const prefix = Array.from({ length: R + 1 }, () => Array.from({ length: C + 1 }, () => 0))
  for (let i = 1; i <= R; ++i) {
    for (let j = 1; j <= C; ++j) {
      prefix[i][j] = matrix[i - 1][j - 1] + prefix[i - 1][j] + prefix[i][j - 1] - prefix[i - 1][j - 1]
    }
  }

  let res = 0
  // 遍历右下角
  for (let i = 0; i < R; ++i) {
    for (let j = 0; j < C; ++j) {
      // 遍历边长
      const maxK = Math.min(i, j) + 1
      for (let k = 1; k <= maxK; ++k) {
        const sum = prefix[i + 1][j + 1] - prefix[i + 1 - k][j + 1] - prefix[i + 1][j + 1 - k] + prefix[i + 1 - k][j + 1 - k]
        if (k * k === sum) { // 如果矩形内全是1
          ++res
        } else {
          break
        }
      }
    }
  }

  return res
};

module.exports = countSquares
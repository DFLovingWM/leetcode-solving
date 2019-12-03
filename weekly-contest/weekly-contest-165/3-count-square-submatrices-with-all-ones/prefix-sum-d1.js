/**
 * 一维前缀和
 * 
 * 时间：`O(N^3)`, 268ms
 */
var countSquares = function (matrix) {
  const [R, C] = [matrix.length, matrix[0].length]

  // 行前缀和（表示1的个数）
  const row = Array.from({ length: R }, () => Array.from({ length: C + 1 }, () => 0))
  for (let i = 0; i < R; ++i) {
    for (let j = 0; j < C; ++j) {
      row[i][j + 1] = row[i][j] + matrix[i][j]
    }
  }
  // 列前缀和（表示1的个数）
  const col = Array.from({ length: C }, () => Array.from({ length: R + 1 }, () => 0))
  for (let j = 0; j < C; ++j) {
    for (let i = 0; i < R; ++i) {
      col[j][i + 1] = col[j][i] + matrix[i][j]
    }
  }

  // num[i][j]表示以`(i,j)`为右下角的正方形个数
  const num = Array.from({ length: R }, () => Array.from({ length: C }, () => 0))
  for (let i = 0; i < R; ++i) {
    for (let j = 0; j < C; ++j) {
      // 遍历边长
      const maxK = Math.min(i, j) + 1
      for (let k = 1; k <= maxK; ++k) {
        if (row[i - k + 1][j + 1] - row[i - k + 1][j + 1 - k] === k && col[j - k + 1][i + 1] - col[j - k + 1][i + 1 - k] === k) {
          ++num[i][j]
        } else {
          break
        }
      }
    }
  }

  // 合计
  let res = 0
  for (let i = 0; i < R; ++i) {
    for (let j = 0; j < C; ++j) {
      res += num[i][j]
    }
  }
  return res
};

module.exports = countSquares
/**
 * 暴力
 * 
 * 时间：O(N^3), 76ms
 */
var oddCells = function (rows, cols, indices) {
  const matrix = Array.from({ length: rows }, () => Array.from({ length: cols }, () => 0))
  for (const [x, y] of indices) {
    for (let j = 0; j < cols; ++j) ++matrix[x][j]
    for (let i = 0; i < rows; ++i) ++matrix[i][y]
  }
  let res = 0
  for (let i = 0; i < rows; ++i) {
    for (let j = 0; j < cols; ++j) {
      if (matrix[i][j] & 1) ++res
    }
  }
  return res
};

module.exports = oddCells
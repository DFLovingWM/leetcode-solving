/**
 * 哈希优化
 * 时间：O(N^2)
 */
var luckyNumbers  = function(matrix) {
  const m = matrix.length, n = matrix[0].length;

  // rowMin[i]表示第i行的最小值所在列
  const rowMin = Array.from({ length: m }, () => 0);
  for (let i = 0; i < m; ++i) {
    for (let j = 0; j < n; ++j) {
      if (matrix[i][j] < matrix[i][rowMin[i]]) {
        rowMin[i] = j;
      }
    }
  }

  // colMax[j]表示第j列的最大值所在行
  const colMax = Array.from({ length: n }, () => 0);
  for (let j = 0; j < n; ++j) {
    for (let i = 0; i < m; ++i) {
      if (matrix[i][j] > matrix[colMax[j]][j]) {
        colMax[j] = i;
      }
    }
  }

  const res = [];
  for (let i = 0; i < m; ++i) {
    for (let j = 0; j < n; ++j) {
      if (rowMin[i] === j && colMax[j] === i) {
        res.push(matrix[i][j]);
      }
    }
  }
  return res;
};
/**
 * 用dummy结点（第0列用1、其余用0作为边界）计算，最后再截断
 * 时间: O(N^2), 80ms
 */
var generate = function(n) {
  // 一开始全为0（大量dummy结点）
  const matrix = Array.from({ length: n }, () => Array.from({ length: n }, () => 0))

  // 第0列全为1
  for (let i = 0; i < n; ++i) {
    matrix[i][0] = 1
  }

  for (let i = 0; i < n; ++i) {
    for (let j = 1; j <= i; ++j) {
      matrix[i][j] = matrix[i - 1][j - 1] + matrix[i - 1][j] // 当前 = 左上方 + 上方
    }
  }

  return matrix.map((row, index) => row.slice(0, index + 1)) // 截断：第i行只保留(i+1)个元素
};

[5].forEach(n => {
  console.log(generate(n))
})
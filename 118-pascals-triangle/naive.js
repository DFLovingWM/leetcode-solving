/**
 * 每一行计算，处理好边界情况
 * 时间: O(N^2), 44ms
 */
var generate = function(n) {
  if (n === 0) return []

  const matrix = [[1]]
  for (let i = 1; i < n; ++i) {
    const row = [1] // 首元素必存在，且为1
    for (let j = 1; j < i; ++j) {
      row.push(matrix[i - 1][j] + matrix[i - 1][j - 1])
    }
    row.push(1) // 尾元素
    matrix.push(row)
  }
  return matrix
};

[5].forEach(n => {
  console.log(generate(n))
})
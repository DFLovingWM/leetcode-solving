/**
 * 列数即周期
 */
var shiftGrid = function (grid, k) {
  const [n, m] = [grid.length, grid[0].length]
  const round = Math.floor(k / m) // 周期 => 行偏移的次数
  for (let i = 0; i < round % n; ++i) {
    rowChange(grid)
  }
  for (let i = 0; i < k % m; ++i) {
    change(grid)
  }
  return grid
};

function rowChange (matrix) {
  matrix.unshift(matrix.pop())
}

function change (matrix) {
  const [n, m] = [matrix.length, matrix[0].length]

  // 将最后一列拿出来
  const lastCol = []
  for (let i = 0; i < n; ++i) {
    lastCol.push(matrix[i][m - 1])
  }

  // 除了最后一列，每一列向后覆盖
  for (let j = m - 2; j >= 0; --j) {
    for (let i = 0; i < n; ++i) {
      matrix[i][j + 1] = matrix[i][j]
    }
  }

  // 将最后一列变一下，放到第一列
  lastCol.unshift(lastCol.pop())
  for (let i = 0; i < n; ++i) {
    matrix[i][0] = lastCol[i]
  }
}

[
  [[[1,2,3],[4,5,6],[7,8,9]], 1],
  [[[3,8,1,9],[19,7,2,5],[4,6,11,10],[12,0,21,13]], 4],
  [[[1,2,3],[4,5,6],[7,8,9]], 9],
].forEach(input => {
  console.log(shiftGrid(...input))
})
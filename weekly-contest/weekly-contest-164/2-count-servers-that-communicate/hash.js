/**
 * 哈希表优化：记录每一行、每一列的数量
 * 
 * 时间：`O(N^2)`, 108ms
 */
var countServers = function (grid) {
  const [R, C] = [grid.length, grid[0].length]
  const row = new Array(R).fill(0)
  const col = new Array(C).fill(0)

  // 数每一行、每一列的数量
  for (let i = 0; i < R; ++i) {
    for (let j = 0; j < C; ++j) {
      if (grid[i][j] === 1) {
        ++row[i]
        ++col[j]
      }
    }
  }

  let res = 0
  for (let i = 0; i < R; ++i) {
    for (let j = 0; j < C; ++j) {
      if (grid[i][j] === 1 && (row[i] > 1 || col[j] > 1)) ++res
    }
  }

  return res
};

module.exports = countServers
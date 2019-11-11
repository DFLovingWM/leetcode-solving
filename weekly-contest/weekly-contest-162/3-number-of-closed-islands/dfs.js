/**
 * 着色
 */
const DIRS = [
  [1, 0],
  [-1, 0],
  [0, 1],
  [0, -1]
]

var closedIsland = function (grid) {
  const [rows, cols] = [grid.length, grid[0].length]
  let res = 0
  let tmp = 0

  for (let i = 0; i < rows; ++i) {
    for (let j = 0; j < cols; ++j) {
      if (grid[i][j] === 0) {
        tmp = 1
        dfs(i, j)
        res += tmp
      }
    }
  }

  function isValid (x, y) {
    return x >= 0 && y >= 0 && x < grid.length && y < grid[0].length
  }

  function dfs (x, y) {
    if (x === 0 || x === rows - 1 || y === 0 || y === cols - 1) tmp = 0
    grid[x][y] = 1

    for (const [ox, oy] of DIRS) {
      const [nx, ny] = [x + ox, y + oy]
      if (isValid(nx, ny) && grid[nx][ny] === 0) {
        dfs(nx, ny)
      }
    }
  }

  return res
};

module.exports = closedIsland
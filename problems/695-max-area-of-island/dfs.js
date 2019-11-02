/**
 * DFS
 * 
 * 时间：92ms
 */
var maxAreaOfIsland = function (grid) {
  let res = 0
  for (let i = 0; i < grid.length; ++i) {
    for (let j = 0; j < grid[0].length; ++j) {
      if (grid[i][j] === 1) {
        res = Math.max(res, dfs(grid, i, j))
      }
    }
  }
  return res
};

const DIRS = [
  [0, -1],
  [0, 1],
  [1, 0],
  [-1, 0]
]

function dfs (grid, x, y) {
  let res = 1
  grid[x][y] = 0 // 侵入式标记（滑稽

  for (const dir of DIRS) {
    const [nx, ny] = [x + dir[0], y + dir[1]]
    if (isValid(grid, nx, ny) && grid[nx][ny] === 1) {
      res += dfs(grid, nx, ny)
    }
  }

  return res
}

function isValid (grid, x, y) {
  return x >= 0 && x < grid.length && y >= 0 && y < grid[0].length
}
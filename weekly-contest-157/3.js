const BLOCK = 0

/**
 * DFS，暴力搜索
 */
var getMaximumGold = function (grid) {
  const [R, C] = [grid.length, grid[0].length]
  let res = 0

  for (let i = 0; i < R; ++i) {
    for (let j = 0; j < C; ++j) {
      if (grid[i][j] !== BLOCK) { // 可以作为起点
        res = Math.max(res, dfs(grid, i, j))
      }
    }
  }

  return res
};

const DIRS = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0]
]

function dfs (grid, x, y) {
  let max = 0

  for (const dir of DIRS) {
    const xx = x + dir[0]
    const yy = y + dir[1]
    
    if (xx >= 0 && xx < grid.length && yy >= 0 && yy < grid[0].length && grid[xx][yy] !== BLOCK) {
      const tmp = grid[x][y]
      grid[x][y] = BLOCK
      const res = dfs(grid, xx, yy)
      max = Math.max(max, res)
      // 回溯
      grid[x][y] = tmp
    }
  }

  return grid[x][y] + max
}

[
  [[0,6,0],[5,8,7],[0,9,0]],
  [[1,0,7],[2,0,6],[3,4,5],[0,3,0],[9,0,20]],
].forEach(g => {
  console.log(getMaximumGold(g))
})
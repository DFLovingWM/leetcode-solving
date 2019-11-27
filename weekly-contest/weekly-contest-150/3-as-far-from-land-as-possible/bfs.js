/**
 * BFS + 逆向思维
 * 
 * 时间：`O(N^2)`, 116ms
 */

const LAND = 1
const SEA = 0
const DIRS = [
  [-1, 0],
  [1, 0],
  [0, 1],
  [0, -1]
]

var maxDistance = function (grid) {
  const [R, C] = [grid.length, grid[0].length]

  function isValid (x, y) {
    return x >= 0 && x < R && y >= 0 && y < C
  }

  let currs = []
  let res = -1

  // 初始化：将所有“陆地”加入队列
  for (let i = 0; i < R; ++i) {
    for (let j = 0; j < C; ++j) {
      if (grid[i][j] === LAND) {
        currs.push([i, j])
      }
    }
  }

  if (currs.length === 0 || currs.length === R * C) return -1
  let level = 0

  for (; currs.length > 0; ++level) {
    const nexts = []
    for (const [x, y] of currs) {
      for (const dir of DIRS) {
        const [nx, ny] = [x + dir[0], y + dir[1]]
        if (isValid(nx, ny) && grid[nx][ny] === SEA) {
          grid[nx][ny] = LAND
          nexts.push([nx, ny])
        }
      }
    }
    currs = nexts
  }

  return level - 1
};

[
  [[1,0,1],[0,0,0],[1,0,1]],
  [[1,0,0],[0,0,0],[0,0,0]],
  [[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]],
].forEach(g => {
  console.log(maxDistance(g))
})
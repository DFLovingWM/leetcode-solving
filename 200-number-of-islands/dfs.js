/**
 * 求连通分量的数目。DFS
 * 这里连通分量是由【4个】方向上相连的结点组成的
 */
var numIslands = function(grid) {
  if (grid.length === 0) return 0

  const [R, C] = [grid.length, grid[0].length]
  const visited = Array.from({ length: R }, () => Array.from({ length: C }, () => false))
  let blockCount = 0

  for (let i = 0; i < R; ++i) {
    for (let j = 0; j < C; ++j) {
      if (grid[i][j] === '1' && !visited[i][j]) {
        ++blockCount
        dfs(i, j, grid, visited)
      }
    }
  }

  return blockCount
};

const DIRECTIONS = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0]
]

function dfs (i, j, grid, visited) {
  const [R, C] = [grid.length, grid[0].length]
  visited[i][j] = true

  for (const [x, y] of DIRECTIONS) {
    const [nextI, nextJ] = [i + x, j + y]
    if (
      (nextI >= 0 && nextI < R && nextJ >= 0 && nextJ < C) && // 位置合法
      (grid[nextI][nextJ] === '1') &&
      (!visited[nextI][nextJ])
    ) {
      dfs(nextI, nextJ, grid, visited)
    }
  }
}

// [
//   [
//     '11110'.split(''),
//     '11010'.split(''),
//     '11000'.split(''),
//     '00000'.split(''),
//   ],
//   [
//     '11000'.split(''),
//     '11000'.split(''),
//     '00100'.split(''),
//     '00011'.split(''),
//   ],
// ].forEach(m => {
//   console.log(numIslands(m))
// })
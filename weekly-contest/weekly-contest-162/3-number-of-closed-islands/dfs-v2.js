/**
 * DFS。排除掉不封闭的，剩下的就是封闭的
 * 
 * 时间：108ms
 */
const DIRS = [
  [-1, 0],
  [1, 0],
  [0, 1],
  [0, -1]
]
const LAND = 0
const SEA = 1

var closedIsland = function (board) {
  const [R, C] = [board.length, board[0].length]

  function isValid (x, y) {
    return x >= 0 && x < R && y >= 0 && y < C
  }

  // DFS，穷尽式着色
  function dfs (x, y) {
    board[x][y] = SEA // 修改为海洋（侵入式标记）

    for (const dir of DIRS) {
      const [nx, ny] = [x + dir[0], y + dir[1]]
      if (isValid(nx, ny) && board[nx][ny] === LAND) {
        dfs(nx, ny)
      }
    }
  }

  // 排除：首行、尾行的1
  for (let j = 0; j < C; ++j) {
    if (board[0][j] === LAND) dfs(0, j)
    if (board[R - 1][j] === LAND) dfs(R - 1, j)
  }
  // 排除：首列、尾列的1
  for (let i = 0; i < R; ++i) {
    if (board[i][0] === LAND) dfs(i, 0)
    if (board[i][C - 1] === LAND) dfs(i, C - 1)
  }

  // 最后，数下还剩多少个封闭陆地
  let cnt = 0
  for (let i = 0; i < R; ++i) {
    for (let j = 0; j < C; ++j) {
      if (board[i][j] === LAND) {
        dfs(i, j)
        ++cnt
      }
    }
  }
  return cnt
};

module.exports = closedIsland
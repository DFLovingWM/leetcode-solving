/**
 * 思想：
 * 任何与边界上的'O'相连的'O'，都不会变成'X'。
 * 利用逆向思维(排除法)，可以从边上的'O'出发，扩展'O'，然后图中剩下的全是'X'。
 * 
 * 时间：104ms
 * 空间：42.9MB
 */
var solve = function (board) {
  const R = board.length
  if (R === 0) return
  const C = board[0].length

  const oh = Array.from({ length: R }, () => Array.from({ length: C }, () => false))

  // 首行、尾行
  for (const i of [0, R - 1]) {
    for (let j = 0; j < C; ++j) {
      if (board[i][j] === 'O' && !oh[i][j]) {
        dfs(board, oh, i, j)
      }
    }
  }

  // 首列、尾列
  for (const j of [0, C - 1]) {
    for (let i = 0; i < R; ++i) {
      if (board[i][j] === 'O' && !oh[i][j]) {
        dfs(board, oh, i, j)
      }
    }
  }

  // 结果
  for (let i = 0; i < R; ++i) {
    for (let j = 0; j < C; ++j) {
      if (!oh[i][j]) {
        board[i][j] = 'X'
      }
    }
  }
};

const DIRS = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0]
]

// 递归函数
function dfs (board, oh, x, y) {
  oh[x][y] = true

  for (const dir of DIRS) {
    const xx = x + dir[0]
    const yy = y + dir[1]
    if (isValid(board, xx, yy) && board[xx][yy] === 'O' && !oh[xx][yy]) {
      dfs(board, oh, xx, yy)
    }
  }
}

function isValid (board, x, y) {
  return x >= 0 && x < board.length && y >= 0 && y < board[0].length
}

const b = [["X","X","X","X"],["X","O","O","X"],["X","X","O","X"],["X","O","X","X"]]
solve(b)
console.log(b)
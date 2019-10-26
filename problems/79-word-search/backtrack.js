const DIRS = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0]
]

/**
 * 回溯
 * 
 * 时间：92ms
 * 空间：39MB
 */
var exist = function (board, word) {
  const [R, C] = [board.length, board[0].length]

  // 遍历所有cell作为递归起点
  for (let i = 0; i < R; ++i) {
    for (let j = 0; j < C; ++j) {
      if (dfs(board, i, j, word, 0)) return true
    }
  }

  return false
};

// 递归函数
function dfs (board, x, y, word, i) {
  if (i === word.length) return true

  if (x >= 0 && x < board.length && y >= 0 && y < board[0].length && word[i] === board[x][y]) {
    // 如果位置合法、而且与word的字符匹配，就走这一格
    const ch = board[x][y]
    board[x][y] = '#'
    for (const dir of DIRS) {
      const xx = x + dir[0]
      const yy = y + dir[1]
      if (dfs(board, xx, yy, word, i + 1)) return true
    }
    // 回溯
    board[x][y] = ch
  }

  return false
}

const board = [
  ['A','B','C','E'],
  ['S','F','C','S'],
  ['A','D','E','E']
]
console.log(exist(board, 'ABCCED'))
console.log(exist(board, 'SEE'))
console.log(exist(board, 'ABCB'))
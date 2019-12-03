/**
 * 模拟
 * 
 * 时间：`O(N^3)`, 68ms
 * 空间：`O(N^2)`, 34MB
 */
var tictactoe = function (moves) {
  const n = moves.length
  const board = Array.from({ length: 3 }, () => Array.from({ length: 3 }, () => ''))
  for (let i = 0; i < n; ++i) {
    const [x, y] = moves[i]
    board[x][y] = i % 2 === 0 ? 'A' : 'B'
    if (i >= 4) { // 开始每一步都判断
      if (check(board, 'A')) return 'A'
      if (check(board, 'B')) return 'B'
    }
  }
  if (n === 9) return 'Draw'
  return 'Pending'
};

function check (board, ch) {
  // 每一行
  if (board.some(row => row.every(cell => cell === ch))) return true

  // 每一列
  for (let j = 0; j < 3; ++j) {
    let cnt = 0
    for (let i = 0; i < 3; ++i) {
      if (board[i][j] === ch) ++cnt
    }
    if (cnt === 3) return true
  }

  // 2个对角线
  if (board[0][0] === ch && board[1][1] === ch && board[2][2] === ch) return true
  if (board[0][2] === ch && board[1][1] === ch && board[2][0] === ch) return true

  return false
}

module.exports = tictactoe
/**
 * 回溯（二维）
 * 
 * 时间：92ms
 * 空间：37MB
 */
var solveNQueens = function (n) {
  const board = Array.from({ length: n }, () => Array.from({ length: n }, () => '.')) // 棋局，初始时没有皇后，全为`.`
  const res = []

  // 递归函数
  function backtrack (r) {
    if (r === n) {
      res.push(board.map(row => row.join('')))
      return
    }

    for (let c = 0; c < n; ++c) { // 尝试放到(r, c)
      let collide = false
      for (let pr = r - 1; pr >= 0; --pr) { // 与之前的所有行比较
        if (
          board[pr][c] === 'Q' ||
          c + (r - pr) < n && board[pr][c + (r - pr)] === 'Q' ||
          c - (r - pr) < n && board[pr][c - (r - pr)] === 'Q'
        ) {
          collide = true
          break
        }
      }
      if (!collide) {
        board[r][c] = 'Q'
        backtrack(r + 1)
        board[r][c] = '.'
      }
    }
  }

  backtrack(0)
  return res
};

module.exports = solveNQueens
/**
 * @param {character[][]} board
 * @return {number}
 */
var numRookCaptures = function(board) {
  // Find the white rook [R]
  let xR, yR
  for (let i = 0; i < board.length; ++i) {
    for (let j = 0; j < board[0].length; ++j) {
      if (board[i][j] === 'R') {
        xR = i
        yR = j
        break
      }
    }
  }

  // Check the first meet at 4 directions
  const DIRECTIONS = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1]
  ]
  let count = 0
  for (const [xOffset, yOffset] of DIRECTIONS) {
    let x, y
    for (
      x = xR + xOffset, y = yR + yOffset;
      (x >= 0 && x < board.length) && (y >= 0 && y < board[0].length) && board[x][y] === '.';
      x += xOffset, y += yOffset
    );
    if ((x >= 0 && x < board.length) && (y >= 0 && y < board[0].length) && board[x][y] === 'p') { // If the first meet is black pawn [p]
      ++count
      continue
    }
  }

  return count
};

// [
//   [[".",".",".",".",".",".",".","."],[".",".",".","p",".",".",".","."],[".",".",".","R",".",".",".","p"],[".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".","."],[".",".",".","p",".",".",".","."],[".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".","."]],
//   [[".",".",".",".",".",".",".","."],[".","p","p","p","p","p",".","."],[".","p","p","B","p","p",".","."],[".","p","B","R","B","p",".","."],[".","p","p","B","p","p",".","."],[".","p","p","p","p","p",".","."],[".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".","."]],
//   [[".",".",".",".",".",".",".","."],[".",".",".","p",".",".",".","."],[".",".",".","p",".",".",".","."],["p","p",".","R",".","p","B","."],[".",".",".",".",".",".",".","."],[".",".",".","B",".",".",".","."],[".",".",".","p",".",".",".","."],[".",".",".",".",".",".",".","."]]
// ].forEach(board => {
//   console.log(numRookCaptures(board))
// })
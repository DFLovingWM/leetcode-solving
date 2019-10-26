/**
 * 暴力：对每个有数字的格子都检查一下3个规则
 * 
 * 时间：O(N^3)
 * 空间：O(1)
 */
const DIMEN = 9
const SUB_DIMEN = 3

var isValidSudoku = function (board) {
  for (let i = 0; i < DIMEN; ++i) {
    for (let j = 0; j < DIMEN; ++j) {
      if (
        board[i][j] !== '.' &&
        (!isRowValid(board, i, j) || !isColValid(board, i, j) || !isSubboardValid(board, i, j))
      ) {
        // console.log(i, j)
        return false
      }
    }
  }
  return true
};

function isRowValid(board, x, y) {
  let count = 0
  for (let i = 0; i < board[0].length; ++i) {
    if (board[x][i] === board[x][y])++count
    if (count === 2) return false
  }
  return true
}

function isColValid(board, x, y) {
  let count = 0
  for (let i = 0; i < board.length; ++i) {
    if (board[i][y] === board[x][y])++count
    if (count === 2) return false
  }
  return true
}

function isSubboardValid(board, x, y) {
  let count = 0

  let startX = Math.floor(x / SUB_DIMEN) * SUB_DIMEN
  let endX = startX + SUB_DIMEN
  let startY = Math.floor(y / SUB_DIMEN) * SUB_DIMEN
  let endY = startY + SUB_DIMEN

  for (let i = startX; i < endX; ++i) {
    for (let j = startY; j < endY; ++j) {
      if (board[i][j] === board[x][y])++count
      if (count === 2) return false
    }
  }
  return true
}

[
  [
    ["5", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"]
  ],
  [
    ["8", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"]
  ],
  [
    [".", ".", ".", ".", "5", ".", ".", "1", "."], 
    [".", "4", ".", "3", ".", ".", ".", ".", "."], 
    [".", ".", ".", ".", ".", "3", ".", ".", "1"], 
    ["8", ".", ".", ".", ".", ".", ".", "2", "."], 
    [".", ".", "2", ".", "7", ".", ".", ".", "."], 
    [".", "1", "5", ".", ".", ".", ".", ".", "."], 
    [".", ".", ".", ".", ".", "2", ".", ".", "."], 
    [".", "2", ".", "9", ".", ".", ".", ".", "."], 
    [".", ".", "4", ".", ".", ".", ".", ".", "."]
  ],
].forEach(board => {
  console.log(isValidSudoku(board))
})
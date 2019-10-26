const BASE = 3
const DIMEN = BASE * BASE

/**
 * DFS + 回溯，耗时[92ms]
 */
function solveSudoku (board) {
  fill(board, 0, 0)
}

/**
 * 递归单位函数：返回true表示找到解、整个过程可终止
 */
function fill (board, row, col) {
  if (row === DIMEN) {
    return true
  }

  let [newRow, newCol] = getNextPosition(row, col)

  if (board[row][col] !== '.') { // 这个位置不需要填，就下一个
    return fill(board, newRow, newCol)
  }

  for (let i = 1; i <= DIMEN; ++i) { // 遍历所有可以填的值
    const cell = String(i)
    if (satisfyGrid(board, row, col, cell) && satisfyRow(board, row, cell) && satisfyColumn(board, col, cell)) { // 如果都满足
      board[row][col] = cell // 就填充这个值
      // 然后递归下一个格子
      const canTerminal = fill(board, newRow, newCol)
      if (canTerminal) return true
    }
  }
  // 回溯时，需要reset该值
  board[row][col] = '.'

  return false
}

/**
 * 得到下一个位置的坐标
 */
function getNextPosition (row, col) {
  let newCol = col + 1
  let newRow = row
  if (newCol === DIMEN) { // tail，到下一行的head
    newCol = 0
    ++newRow
  }
  return [newRow, newCol]
}

function satisfyGrid (board, row, col, cell) {
  let rowStart = Math.floor(row / BASE) * BASE,
      rowEnd = rowStart + BASE
  let colStart = Math.floor(col / BASE) * BASE,
      colEnd = colStart + BASE

  for (let i = rowStart; i < rowEnd; ++i) {
    for (let j = colStart; j < colEnd; ++j) {
      if (board[i][j] === cell) {
        return false
      }
    }
  }
  return true
}

function satisfyRow (board, row, cell) {
  return !board[row].includes(cell)
}

function satisfyColumn (board, col, cell) {
  for (let i = 0; i < DIMEN; ++i) {
    if (board[i][col] === cell) {
      return false
    }
  }
  return true
}

module.exports = solveSudoku
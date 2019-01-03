/**
 * 优化的DFS：用hash记录cell已经填了某个数字，判断时只需要O(1)时间复杂度
 * [96ms]，优化没多大用处？？？
 */
const BASE = 3
const DIMEN = Math.pow(BASE, 2)

function solveSudoku (board) {
  let canTerminal = false // 递归终止标志
  let inRow = Array.from({ length: DIMEN }, () => Array.from({ length: DIMEN + 1 }, () => false)), // 二维数组
      inCol = Array.from({ length: DIMEN }, () => Array.from({ length: DIMEN + 1 }, () => false)), // 二维数组
      inGrid = Array.from({ length: DIMEN }, () => Array.from({ length: DIMEN + 1 }, () => false)) // 二维数组

  function isValid (row, col, cell) {
    return !inRow[row][cell] &&
           !inCol[col][cell] &&
           !inGrid[getBlockIndex(row, col)][cell]
  }

  function getNextPosition (row, col) {
    let nextRow = row,
        nextCol = col + 1
    if (nextCol === DIMEN) {
      nextCol = 0
      ++nextRow
    }
    return [nextRow, nextCol]
  }

  function getNextEmptyPosition (row, col) {
    let [nextRow, nextCol] = getNextPosition(row, col)
    while (nextRow < DIMEN && board[nextRow][nextCol] !== '.') {
      [nextRow, nextCol] = getNextPosition(nextRow, nextCol)
    }
    return [nextRow, nextCol]
  }

  function getBlockIndex (row, col) {
    let gridRow = Math.floor(row / BASE),
        gridCol = Math.floor(col / BASE)
    return gridRow * BASE + gridCol
  }

  function set (row, col, cell) {
    board[row][col] = cell
    inRow[row][cell] = true
    inCol[col][cell] = true
    inGrid[getBlockIndex(row, col)][cell] = true
  }

  function reset (row, col, cell) {
    board[row][col] = '.'
    inRow[row][cell] = false
    inCol[col][cell] = false
    inGrid[getBlockIndex(row, col)][cell] = false
  }

  // recursing function
  function fill (row, col) {
    if (canTerminal || row === DIMEN) {
      canTerminal = true
      return
    }

    let [nextRow, nextCol] = getNextEmptyPosition(row, col)

    for (let i = 1; i <= DIMEN; ++i) {
      const candidate = String(i)
      if (isValid(row, col, candidate)) { // 如果候选值在这个位置是有效的，则尝试填入该值
        // 填入该值，并修改对应的hash
        set(row, col, candidate)

        // 深入(递归)下一个位置
        fill(nextRow, nextCol)

        // 回溯，还原状态
        if (canTerminal) return // 判断是否需要终止递归
        reset(row, col, candidate)
      }
    }
  }

  /**
   * 给已有棋盘设置hash
   */
  function init () {
    for (let i = 0; i < DIMEN; ++i) {
      for (let j = 0; j < DIMEN; ++j) {
        const cell = board[i][j]
        if (cell !== '.') {
          inRow[i][cell] = true
          inCol[j][cell] = true
          inGrid[getBlockIndex(i, j)][cell] = true
        }
      }
    }
  }

  init()
  fill(...getNextEmptyPosition(0, -1))
  // console.log(board)
}

module.exports = solveSudoku
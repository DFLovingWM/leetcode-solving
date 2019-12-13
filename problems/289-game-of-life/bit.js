// 8个相邻位置
const DIRS = [
  [-1, -1],
  [-1, 0],
  [-1, 1],
  [0, -1],
  [0, 1],
  [1, -1],
  [1, 0],
  [1, 1]
]

const STATE = {
  DEAD_2_DEAD: 0,
  LIVE_2_DEAD: 1,
  DEAD_2_LIVE: 2,
  LIVE_2_LIVE: 3
}

/**
 * 模拟
 * 时间：O(N^2)
 * 空间：O(1)
 */
var gameOfLife = function (board) {
  const [R, C] = [board.length, board[0].length]

  for (let i = 0; i < R; ++i) {
    for (let j = 0; j < C; ++j) {
      // 数存活的邻居个数
      let live = 0
      for (const dir of DIRS) {
        const ii = i + dir[0]
        const jj = j + dir[1]
        if (ii >= 0 && ii < R && jj >= 0 && jj < C &&
          [STATE.LIVE_2_DEAD, STATE.LIVE_2_LIVE].includes(board[ii][jj])) {
          ++live
        }
      }

      // 判断下一个状态，设置中间状态
      if (board[i][j] === 1) { // 活
        if (live < 2 || live > 3) {
          board[i][j] = STATE.LIVE_2_DEAD
        } else {
          board[i][j] = STATE.LIVE_2_LIVE
        }
      } else { // 死
        if (live === 3) {
          board[i][j] = STATE.DEAD_2_LIVE
        } else {
          board[i][j] = STATE.DEAD_2_DEAD
        }
      }
    }
  }

  // 设置下一个状态
  for (let i = 0; i < R; ++i) {
    for (let j = 0; j < C; ++j) {
      if ([STATE.DEAD_2_DEAD, STATE.LIVE_2_DEAD].includes(board[i][j])) {
        board[i][j] = 0
      } else {
        board[i][j] = 1
      }
    }
  }
};
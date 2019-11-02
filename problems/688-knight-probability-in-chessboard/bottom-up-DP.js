/**
 * Bottom-up DP（滚动数组）：
 * 设`dp[i][x][y] => dp[x][y]`为从`(x,y)`出发、走`i`步的路径数
 */

const DIRS = [
  [2, 1],
  [2, -1],
  [1, 2],
  [1, -2],
  [-1, 2],
  [-1, -2],
  [-2, 1],
  [-2, -1]
]

var knightProbability = function (size, maxStep, sx, sy) {
  let prev = new Array(size).fill(0).map(() => new Array(size).fill(0))
  prev[sx][sy] = 1

  for (let i = 1; i <= maxStep; ++i) {
    const curr = new Array(size).fill(0).map(() => new Array(size).fill(0))

    for (let x = 0; x < size; ++x) {
      for (let y = 0; y < size; ++y) {
        // 遍历8个方向，取上一步
        for (const [xo, yo] of DIRS) {
          const [lx, ly] = [x + xo, y + yo]
          if (isValid(size, lx, ly)) {
            curr[x][y] += prev[lx][ly]
          }
        }
      }
    }

    prev = curr
  }

  // 累计有效路径数
  let res = 0
  for (let x = 0; x < size; ++x) {
    for (let y = 0; y < size; ++y) {
      res += prev[x][y]
    }
  }

  // 除以所有可能性（8^K）
  // 为了避免溢出，可以每次除以8，共K次
  for (let i = 0; i < maxStep; ++i) {
    res /= 8
  }

  return res
};

function isValid (size, x, y) {
  return x >= 0 && x < size && y >= 0 && y < size
}

module.exports = knightProbability
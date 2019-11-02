/**
 * `dp[i][x][y]`表示从`(x,y)`出发、总共走`i`步的路径数
 * 则有：`dp[i][x][y] += dp[i-1][4个方向]`
 * 可以使用滚动数组来压缩空间
 * 
 * 时间：`O(N * R * C)`, 152ms
 * 空间：`O(R * C)`, 38.2MB
 */
const MOD = Math.pow(10, 9) + 7

const DIRS = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1]
]

var findPaths = function (R, C, maxStep, sx, sy) {
  let currs = createArr(R, C, 0)
  let nexts
  let res = 0

  for (let i = 0; i < maxStep; ++i) {
    nexts = createArr(R, C, 0)

    for (let x = 0; x < R; ++x) {
      for (let y = 0; y < C; ++y) {
        // 对于该位置，取上一个位置
        for (const dir of DIRS) {
          const [lx, ly] = [x + dir[0], y + dir[1]]
          if (!isValid(R, C, lx, ly)) {
            ++nexts[x][y] // 注：特殊情况，可以通过将数组扩充2行、2列（出界时值为1）来统一
          } else {
            nexts[x][y] = (nexts[x][y] + currs[lx][ly]) % MOD
          }
        }
      }
    }

    currs = nexts
  }

  return currs[sx][sy]
};

function createArr (R, C, defVal) {
  return new Array(R).fill(0).map(() => new Array(C).fill(defVal))
}

function isValid (R, C, x, y) {
  return x >= 0 && x < R && y >= 0 && y < C
}

module.exports = findPaths
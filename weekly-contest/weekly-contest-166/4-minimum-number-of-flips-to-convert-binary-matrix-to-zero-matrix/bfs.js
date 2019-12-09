/**
 * BFS + 位压缩
 * 
 * 时间：`O(2^K * K)`, 60ms
 */

const DIRS = [
  [-1, 0],
  [1, 0],
  [0, 1],
  [0, -1]
]

var minFlips = function (mat) {
  let currs = []
  currs.push(mat)

  const visit = new Set()
  const skey = getHash(mat)
  if (isEnd(skey)) return 0
  visit.add(skey)

  for (let level = 0; currs.length; ++level) {
    const nexts = []
    for (const curr of currs) {
      // 遍历每一个可flip的位置
      for (let x = 0; x < curr.length; ++x) {
        for (let y = 0; y < curr[x].length; ++y) {
          const next = flip(curr, [x, y])
          const key = getHash(next)
          if (!visit.has(key)) {
            if (isEnd(key)) return level + 1
            nexts.push(next)
            visit.add(key)
          }
        }
      }
    }
    currs = nexts
  }

  return -1
};

// 翻转某个位置
// 返回新矩阵
function flip(matrix, [x, y]) {
  const res = matrix.map(row => row.slice())

  res[x][y] = 1 - res[x][y]
  for (const dir of DIRS) {
    const [nx, ny] = [x + dir[0], y + dir[1]]
    if (nx >= 0 && nx < res.length && ny >= 0 && ny < res[0].length) {
      res[nx][ny] = 1 - res[nx][ny]
    }
  }

  return res
}

// 将矩阵压缩（哈希）成一个二进制整数，方便标记
function getHash(matrix) {
  const [R, C] = [matrix.length, matrix[0].length]
  let res = 0
  for (let i = 0; i < R; ++i) {
    for (let j = 0; j < C; ++j) {
      if (matrix[i][j] === 1) {
        res |= 1 << (i * C + j)
      }
    }
  }
  return res
}

// 判断对应的矩阵是否全0矩阵
function isEnd (hash) {
  return hash === 0
}

module.exports = minFlips;
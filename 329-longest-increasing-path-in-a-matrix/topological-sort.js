/**
 * 拓扑排序
 * 
 * 时间：O(MN), 196ms
 */
var longestIncreasingPath = function (matrix) {
  const R = matrix.length
  if (R === 0) return 0
  const C = matrix[0].length

  const indeg = Array.from({ length: R }, () => {
    return Array.from({ length: C }, () => {
      return 0
    })
  })
  for (let i = 0; i < R; ++i) {
    for (let j = 0; j < C; ++j) {
      for (const dir of DIRS) {
        const ii = i + dir[0]
        const jj = j + dir[1]
        if (isValid(matrix, ii, jj) && matrix[i][j] < matrix[ii][jj]) { // i到j为升序 => j到i的有向边
          ++indeg[i][j]
        }
      }
    }
  }

  let queue = []
  for (let i = 0; i < R; ++i) {
    for (let j = 0; j < C; ++j) {
      if (indeg[i][j] === 0) {
        queue.push([i, j])
      }
    }
  }

  let res = 0
  while (queue.length) {
    ++res
    const nextQueue = []

    for (const [x, y] of queue) {
      for (const dir of DIRS) {
        const xx = x + dir[0]
        const yy = y + dir[1]
        if (isValid(matrix, xx, yy) && matrix[xx][yy] < matrix[x][y]) {
          --indeg[xx][yy]
          if (indeg[xx][yy] === 0) {
            nextQueue.push([xx, yy])
          }
        }
      }
    }

    queue = nextQueue
  }

  return res
};

const DIRS = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0]
]

function isValid (matrix, i, j) {
  return i >= 0 && i < matrix.length && j >= 0 && j < matrix[0].length
}

module.exports = longestIncreasingPath
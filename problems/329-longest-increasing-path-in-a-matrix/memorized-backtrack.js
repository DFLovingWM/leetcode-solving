/**
 * 记忆化搜索
 * 
 * 时间：1084ms
 */
var longestIncreasingPath = function (matrix) {
  if (matrix.length === 0) return 0

  const [R, C] = [matrix.length, matrix[0].length]
  let res = 0

  for (let i = 0; i < R; ++i) {
    for (let j = 0; j < C; ++j) {
      res = Math.max(res, backtrack(new Map(), matrix, i, j))
    }
  }

  return res
};

// 可移动的4个方向
const DIRS = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0]
]

// 递归函数
// 返回值：从(i, j)出发的最长路径长度
function backtrack (cache, matrix, i, j, prev) {
  const key = getKey(i, j)
  if (cache.has(key)) return cache.get(key)
  
  let max = 0
  for (const dir of DIRS) {
    const ii = i + dir[0]
    const jj = j + dir[1]
    if (isValid(matrix, ii, jj) && matrix[ii][jj] > matrix[i][j]) {
      max = Math.max(max, backtrack(cache, matrix, ii, jj, matrix[i][j]))
    }
  }
  ++max
  cache.set(key, max)
  return cache.get(key)
}

function getKey (x, y) {
  return `(${x},${y})`
}

function isValid (matrix, i, j) {
  return i >= 0 && i < matrix.length && j >= 0 && j < matrix[0].length
}

module.exports = longestIncreasingPath
/**
 * 设置方向变量
 */
const DIRS = [
  [0, 1],
  [1, 0],
  [0, -1],
  [-1, 0]
]
const UN_FILL = 0

var generateMatrix = function(n) {
  const matrix = Array.from({ length: n }, () => {
    return Array.from({ length: n }, () => {
      return UN_FILL
    })
  })
  let dir = 0
  let next
  let [x, y] = [0, -1]
  let i = 0, limit = n * n

  function isValid (x, y) {
    return x >= 0 && x < n && y >= 0 && y < n
  }

  while (i < limit) {
    const nextX = x + DIRS[dir][0]
    const nextY = y + DIRS[dir][1]

    // 合法位置、并且还没填充
    if (isValid(nextX, nextY) && matrix[nextX][nextY] === UN_FILL) {
      [x, y] = [nextX, nextY]
      matrix[x][y] = ++i
    } else {
      dir = (dir + 1) % DIRS.length
    }
  }

  return matrix
};

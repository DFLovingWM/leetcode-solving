/**
 * 曼哈顿距离 => 层次遍历(BFS)
 * 
 * 时间：`O(N)`, 228ms
 */
const DIRS = [
  [1,0],
  [-1,0],
  [0,1],
  [0,-1]
]

var allCellsDistOrder = function (R, C, r0, c0) {

  function isValid (x, y) {
    return x >= 0 && x < R && y >= 0 && y < C
  }

  let currs = []
  const visit = Array.from({ length: R }, () => Array.from({ length: C }, () => false))
  let res = []

  currs.push([r0, c0])
  visit[r0][c0] = true

  while (currs.length > 0) {
    res.push(...currs)

    const nexts = []
    for (const [x, y] of currs) {
      for (const dir of DIRS) { // 往4个方向拓展
        const [nx, ny] = [x + dir[0], y + dir[1]]
        if (isValid(nx, ny) && !visit[nx][ny]) {
          visit[nx][ny] = true
          nexts.push([nx, ny])
        }
      }
    }
    currs = nexts
  }

  return res
};

function manhattan (A, B) {
  return Math.abs(A[0] - B[0]) + Math.abs(A[1] - B[1])
}

module.exports = allCellsDistOrder
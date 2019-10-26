/**
 * 枚举king的8个方向的第一个queen
 */
const DIRS = [
  [-1, -1],
  [-1, 0],
  [-1, 1],
  [0, -1],
  [0, 1],
  [1, -1],
  [1, 0],
  [1, 1],
]

var queensAttacktheKing = function (queens, king) {
  // queen坐标哈希
  const queen = Array.from({ length: 8 }, () => Array.from({ length: 8 }, () => false))
  for (const [i, j] of queens) {
    queen[i][j] = true
  }

  const res = []
  for (const [xo, yo] of DIRS) {
    let [x, y] = king
    x += xo
    y += yo
    while (isValid(x, y) && !queen[x][y]) {
      x += xo
      y += yo
    }
    if (isValid(x, y)) {
      res.push([x, y])
    }
  }
  return res
};

function isValid (x, y) {
  return x >= 0 && x < 8 && y >= 0 && y < 8
}

[
  [[[0,1],[1,0],[4,0],[0,4],[3,3],[2,4]], [0,0]],
].forEach(input => {
  console.log(queensAttacktheKing(...input))
})
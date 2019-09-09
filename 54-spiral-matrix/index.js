/**
 * 设置4对方向变量
 */
var spiralOrder = function(matrix) {
  if (!matrix || matrix.length === 0 || matrix[0].length === 0) return []

  const [row, col] = [matrix.length, matrix[0].length]
  const sum = row * col
  const res = []
  const dirs = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0]
  ]
  let d = 0
  const visited = Array.from({ length: row }, () => {
    return Array.from({ length: col }, () => {
      return false
    })
  })

  function isValid (x, y) {
    return x >= 0 && x < row && y >= 0 && y < col
  }

  let [x, y] = [0, -1]
  while (res.length < sum) {
    let nextX = x + dirs[d][0]
    let nextY = y + dirs[d][1]

    if (isValid(nextX, nextY) && !visited[nextX][nextY]) { // 合法位置，而且没遍历过
      [x, y] = [nextX, nextY]
      res.push(matrix[x][y])
      visited[x][y] = true
    } else { // 否则，就拐弯
      d = (d + 1) % dirs.length
    }
  }

  return res
};

[
  [],
  [
    [ 1, 2, 3 ],
    [ 4, 5, 6 ],
    [ 7, 8, 9 ]
  ],
  [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9,10,11,12]
  ],
].forEach(matrix => {
  console.log(spiralOrder(matrix))
})

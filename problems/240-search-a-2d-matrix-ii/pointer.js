/**
 * 选定右上角/左下角为起点，然后进行搜索，小于/大于各走一个方向
 */
var searchMatrix = function(matrix, target) {
  const R = matrix.length
  if (R === 0) return false
  const C = matrix[0].length

  let [x, y] = [0, C - 1] // 右上角为起点
  while (y >= 0 && x < R) {
    if (target === matrix[x][y]) return true
    if (target > matrix[x][y]) { // 小了，往下进行二分
      ++x // 往下走
    } else { // 大了，往左进行二分
      --y // 往左走
    }
  }
  return false
};

[
  [[
    [1,   4,  7, 11, 15],
    [2,   5,  8, 12, 19],
    [3,   6,  9, 16, 22],
    [10, 13, 14, 17, 24],
    [18, 21, 23, 26, 30]
  ], 5],
  [[
    [1,   4,  7, 11, 15],
    [2,   5,  8, 12, 19],
    [3,   6,  9, 16, 22],
    [10, 13, 14, 17, 24],
    [18, 21, 23, 26, 30]
  ], 20],
].forEach(m => {
  console.log(searchMatrix(...m))
})
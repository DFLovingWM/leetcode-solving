/**
 * 二分查找
 * 时间：log(MN)，68ms
 */
var searchMatrix = function(matrix, target) {
  const row = matrix.length
  if (row === 0) return false
  const col = matrix[0].length
  if (col === 0) return false

  // 一维坐标 => 二维坐标
  function get (index) {
    const [i, j] = [Math.floor(index / col), index % col]
    return matrix[i][j]
  }

  // 二维坐标 => 一维坐标
  function two2One (i, j) {
    return i * col + j
  }

  let left = two2One(0, 0)
  let right = two2One(row - 1, col - 1)
  while (left < right) {
    const middle = left + (right - left >> 1)
    if (target <= get(middle)) {
      right = middle
    } else {
      left = middle + 1
    }
  }
  return get(left) === target
};

[
  [[
    [1,   3,  5,  7],
    [10, 11, 16, 20],
    [23, 30, 34, 50]
  ], 3],
  [[
    [1,   3,  5,  7],
    [10, 11, 16, 20],
    [23, 30, 34, 50]
  ], 13],
].forEach(input => {
  console.log(searchMatrix(...input))
})

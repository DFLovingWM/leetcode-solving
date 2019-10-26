/**
 * 二分查找
 * 时间：O(NlogX), 其中X为最大与最小值的差。耗时60ms
 */
var kthSmallest = function(matrix, K) {
  const n = matrix.length

  let left = matrix[0][0]
  let right = matrix[n - 1][n - 1] + 1 // 保持二分的“左闭右开”

  while (left < right) {
    let middle = left + (right - left >> 1)
    // 然后寻找比middle小的个数count，跟K比较
    const count = countLE(matrix, middle)
    if (count < K) { // 保持二分的“左闭右开”
      left = middle + 1
    } else {
      right = middle
    }
  }

  return left
};

/**
 * 数出matrix中，小于等于target的元素的数量
 * 非等值二分查找
 * O(N)
 */
function countLE (matrix, target) {
  const n = matrix.length
  let [x, y] = [0, n - 1]
  let res = 0
  while (x < n && y >= 0) {
    if (matrix[x][y] > target) {
      res += x
      --y
    } else {
      ++x
    }
  }
  if (y >= 0) {
    res += x * (y + 1)
  }
  return res
}

module.exports = kthSmallest
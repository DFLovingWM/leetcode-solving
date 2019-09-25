/**
 * 二分查找
 */
var smallestCommonElement = function(matrix) {
  let res = -1
  for (const n of matrix[0]) {
    let i
    for (i = 1; i < matrix.length; ++i) {
      const index = bisectLeft(matrix[i], 0, matrix[i].length, n)
      if (index === matrix[i].length || matrix[i][index] !== n) {
        break
      }
    }
    if (i === matrix.length) {
      res = n
      break
    }
  }
  return res
};

function bisectLeft (arr, left, right, target) {
  while (left < right) {
    const middle = left + (right - left >> 1)
    if (target <= arr[middle]) {
      right = middle
    } else {
      left = middle + 1
    }
  }
  return left
}

[
  [[1,2,3,4,5],[2,4,5,8,10],[3,5,7,9,11],[1,3,5,7,9]],
].forEach(a => {
  console.log(smallestCommonElement(a))
})
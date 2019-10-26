/**
 * 二分查找：
 * - bisectLeft直接满足
 * - bisectRight需要看下是否存在
 */
var searchInsert = function(nums, target) {
  return bisectLeft(nums, 0, nums.length, target)
};

function bisectLeft (arr, left, right, target) {
  while (left < right) {
    let middle = left + Math.floor((right - left) / 2)
    if (target > arr[middle]) {
      left = middle + 1
    } else {
      right = middle
    }
  }
  return left
}

[
  [[1,3,5,6], 5],
  [[1,3,5,6], 2],
  [[1,3,5,6], 7],
  [[1,3,5,6], 0],
].forEach(input => {
  console.log(searchInsert(...input))
})
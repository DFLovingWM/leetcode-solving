/**
 * 执行2次二分查找
 * 
 * 时间：O(2logN)=O(logN)
 * 空间：O(1)
 */
var searchRange = function(nums, target) {
  let L = bisectLeft(nums, 0, nums.length, target)
  if (nums[L] !== target) {
    L = -1
  }
  let R = bisectRight(nums, 0, nums.length, target) - 1
  if (nums[R] !== target) {
    R = -1
  }
  return [L, R]
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

function bisectRight (arr, left, right, target) {
  while (left < right) {
    let middle = left + Math.floor((right - left) / 2)
    if (target >= arr[middle]) {
      left = middle + 1
    } else {
      right = middle
    }
  }
  return left
}

[
  [[5,7,7,8,8,10], 8],
  [[5,7,7,8,8,10], 6],
].forEach(input => {
  console.log(searchRange(...input))
})
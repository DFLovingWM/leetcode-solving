/**
 * 简单题，二分肯定比线性优秀
 */
var isMajorityElement = function(arr, target) {
  const count = bisectRight(arr, 0, arr.length, target) - bisectLeft(arr, 0, arr.length, target)
  return count > arr.length / 2
};

function bisectLeft (arr, left, right, target) {
  let middle
  while (left < right) {
    middle = left + Math.floor((right - left) / 2)
    if (target <= arr[middle]) {
      right = middle
    } else {
      left = middle + 1
    }
  }
  return left
}

function bisectRight (arr, left, right, target) {
  let middle
  while (left < right) {
    middle = left + Math.floor((right - left) / 2)
    if (target < arr[middle]) {
      right = middle
    } else {
      left = middle + 1
    }
  }
  return left
}

[
  [[2,4,5,5,5,5,5,6,6], 5],
  [[10,100,101,101], 101]
].forEach(input => {
  console.log(isMajorityElement(...input))
})

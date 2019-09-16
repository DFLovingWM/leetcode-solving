/**
 * 二分查找
 */
var findClosestElements = function(arr, count, target) {
  const index = bisectLeft(arr, 0, arr.length, target)

  let L, R

  if (arr[index] === target) { // 存在
    if (count & 1) { // 奇
      let offset = (count - 1) / 2
      L = index - offset
      R = index + offset
    } else {// 偶
      L = index - count / 2
      R = index + count / 2 - 1
    }
  } else { // 不存在
    if (count & 1) {
      L = index - 1 - (count - 1) / 2
      R = index - 1 + (count - 1) / 2
    } else {
      L = index - count / 2
      R = index + count / 2 - 1
    }
  }
  console.log('结果:', L, R)

  // 调整负数下标
  if (L < 0) {
    [L, R] = [0, R + (0 - L)]
  } else if (R >= arr.length) {
    [L, R] = [L - (R - arr.length + 1), arr.length - 1]
  }
  console.log('调整后结果:', L, R)

  return arr.slice(L, R + 1)
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
  // [[1,2,3,4,5], 4, 3],
  // [[1,2,3,4,5], 4, -1],
  [[0,1,1,1,2,3,6,7,8,9], 9, 4],
].forEach(input => {
  console.log(findClosestElements(...input))
})
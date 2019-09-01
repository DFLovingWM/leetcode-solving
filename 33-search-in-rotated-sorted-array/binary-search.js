/**
 * 2次二分查找：
 * 1. 二分查找，找出临界点
 * 2. 二分查找，找出目标
 * 
 * 时间复杂度：O(logN)
 */
var search = function(nums, target) {
  const thresholdIndex = findThreshold(nums, 0, nums.length)

  if (target === nums[0]) {
    return 0
  } else if (target > nums[0]) {
    // 左边
    return findTarget(nums, 0, thresholdIndex, target)
  } else {
    // 右边
    return findTarget(nums, thresholdIndex, nums.length, target)
  }
};

// 寻找临界点下标
function findThreshold (arr, left, right) {
  while (left < right) {
    let middle = left + Math.floor((right - left) / 2)
    if (arr[middle] > arr[middle + 1]) {
      // 目标元素：比左边元素要小
      return middle + 1
    } else if (arr[middle] > arr[left]) {
      // 左边正常，则临界点需要在右边找
      left = middle + 1
    } else {
      // 右边正常，则临界点需要在左边找
      right = middle
    }
  }
  // 如果找不到临界点，说明整个数组都是递增的，返回数组长度
  return arr.length
}

// 寻找目标下标（bisectLeft）
function findTarget (arr, left, right, target) {
  while (left < right) {
    let middle = left + Math.floor((right - left) / 2)
    if (target <= arr[middle]) {
      right = middle
    } else {
      left = middle + 1
    }
  }
  // 相等就返回对应下标，不想等说明找不到
  return arr[left] === target ? left : -1
}

[
  [[4,5,6,7,0,1,2], 0],
  [[4,5,6,7,0,1,2], 3],
  [[1,3], 3],
].forEach(input => {
  console.log(search(...input))
})
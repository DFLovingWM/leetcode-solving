/**
 * 线性找临界点 + 二分查找找目标
 */
var search = function(nums, target) {
  let thresholdIndex = findThreshold(nums)

  if (thresholdIndex === -1) {
    // 不存在临界点，整段查找
    return exist(nums, 0, nums.length, target)
  } else if (nums[thresholdIndex] === target) {
    // 临界点就是目标，直接返回
    return true
  } else if (target >= nums[0]) {
    // 较大，在左半段找
    return exist(nums, 0, thresholdIndex, target)
  } else {
    // 较小，在右半段
    return exist(nums, thresholdIndex, nums.length, target)
  }
};

// O(N)
function findThreshold (nums) {
  for (let i = 1; i < nums.length; ++i) {
    if (nums[i] < nums[i - 1]) {
      return i
    }
  }
  return -1
}

// O(logN)，不正宗的二分查找
function exist (arr, left, right, target) {
  while (left < right) {
    let middle = left + Math.floor((right - left) / 2)
    if (target === arr[middle]) {
      return true
    } else if (target > arr[middle]) {
      left = middle + 1
    } else {
      right = middle
    }
  }
  return false
}

[
  [[2,5,6,0,0,1,2], 0],
  [[2,5,6,0,0,1,2], 3],
  [[1,1,1,3,1], 3],
  [[5,1,3], 3],
].forEach(input => {
  console.log(search(...input))
})

/**
 * 最小值 = 旋转的临界点
 */
var findMin = function(nums) {
  let [left, right] = [0, nums.length]

  while (left < right) {
    let middle = left + Math.floor((right - left) / 2)

    if (nums[middle] > nums[middle + 1]) {
      return nums[middle + 1]
    } else if (nums[middle] < nums[left]) {
      right = middle
    } else {
      left = middle + 1
    }

    if (nums[middle] < nums[middle - 1]) {
      return nums[middle]
    } else if (nums[middle] < nums[])
  }

  // 不存在临界点，说明整个数组都是递增的，则首元素最小
  return nums[0]
};

[
  [3,4,5,1,2], // 1
  [4,5,6,7,0,1,2], // 0
  [2,3,4,5,1], // 1
  [4,5,6,1,2,3], // 1
].forEach(arr => {
  console.log(findMin(arr))
})

/**
 * 4 5 6 1 2 3
 * 
 */
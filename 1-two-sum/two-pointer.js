/**
 * 双指针法
 */
const twoSum = (nums, target) => {
  // 排序
  nums = nums
    .map((value, index) => ({
      index, // 因为最后要的是下标，所以这里要记住原来的下标
      value
    }))
    .sort((a, b) => a.value - b.value)

  // 两个指针开始找
  let i = 0
  let j = nums.length - 1
  while (i < j) {
    debugger
    let sum = nums[i].value + nums[j].value
    if (sum < target) {
      ++i
    } else if (sum > target) {
      --j
    } else {
      break
    }
  }

  return [ nums[i].index, nums[j].index ]
}

exports.twoSum = twoSum

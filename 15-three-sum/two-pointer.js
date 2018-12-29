/**
 * 通用版本：target可以是任意值
 */
var three = (nums, target) => {
  const result = []

  nums.sort((a, b) => a - b)

  for (let i = 0; i < nums.length - 2; ++i) {
    if (i - 1 >= 0 && nums[i] === nums[i - 1]) {
      // 去重：如果nums[i]与前一个值一样，则跳过
      continue
    }

    let left = i + 1
    let right = nums.length - 1
    while (left < right) {
      let sum = nums[i] + nums[left] + nums[right]
      if (sum > target) {
        --right
      } else if (sum < target) {
        ++left
      } else {
        result.push([nums[i], nums[left], nums[right]])
        --right
        ++left
        // 去重
        while (left < right &&
          (left - 1 >= 0 && nums[left] === nums[left - 1]) && (right + 1 < nums.length && nums[right] === nums[right + 1])) {
          --right
          ++left
        }
      }
    }
  }

  return result
}

/**
 * 特殊版本：target为0
 */
var threeSum = (nums) => three(nums, 0)

exports.threeSum = threeSum
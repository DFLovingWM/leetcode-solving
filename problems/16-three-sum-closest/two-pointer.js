/**
 * 依然双指针法
 */
var threeSumClosest = (nums, target) => {
  let retDiff = -1
  let retSum

  nums.sort((a, b) => a - b)

  for (let i = 0; i < nums.length - 2; ++i) {
    let left = i + 1
    let right = nums.length - 1

    while (left < right) {
      let sum = nums[i] + nums[left] + nums[right]
      let diff = Math.abs(sum - target)

      if (retDiff === -1 || diff < retDiff) { // 更接近的答案，记录下来
        retDiff = diff
        retSum = sum

        if (retDiff === 0) { // 相等，直接就是答案
          return retSum
        }
      }

      if (sum > target) {
        --right
      } else if (sum < target) {
        ++left
      }
    }
  }

  return retSum
}

exports.threeSumClosest = threeSumClosest
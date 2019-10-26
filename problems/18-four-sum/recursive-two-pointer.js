/**
 * (通用)N的数字相加和为target
 */
function NSum (nums, target, N, results, tmpResult = []) {
  if (N === 3) {
    for (let i = 0; i < nums.length; ++i) {
      if (i - 1 >= 0 && nums[i] === nums[i - 1]) continue // 去重

      let need = target - nums[i]
      let left = i + 1
      let right = nums.length - 1
      while (left < right) {
        let sum = nums[left] + nums[right]
        if (sum > need) { // 大了
          --right
        } else if (sum < need) { // 小了
          ++left
        } else { // 刚好相等
          results.push([ ...tmpResult, nums[i], nums[left], nums[right] ])
          --right
          ++left

          // 去重
          while (left < right &&
            nums[left] === nums[left - 1] && nums[right] === nums[right + 1]) {
            --right
            ++left
          }
        }
      }
    }
  } else { // 多于3个
    for (let i = 0; i + N - 1 < nums.length; ++i) {
      if (nums[i] === nums[i - 1] && i - 1 >= 0) { // 去重
        continue
      }
      if (nums[i] * N > target || nums[nums.length - 1] * N < target) { // [剪枝]最大和都比target小，或者，最小和都比target大，已经不用考虑了
        break
      }
      // 确定了这一个数后，递归
      NSum(nums.slice(i + 1), target - nums[i], N - 1, results, tmpResult.concat(nums[i]))
    }
  }
}

function fourSum (nums, target) {
  nums.sort((a, b) => a - b)
  let results = []
  NSum(nums, target, 4, results)
  return results
}

module.exports = fourSum
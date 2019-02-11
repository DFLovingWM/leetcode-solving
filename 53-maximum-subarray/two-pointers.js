/**
 * [WA]: when there is max repeated
 * Use 2 pointers to found a window, and expand it.
 */
var maxSubArray = function(nums) {
  let max, maxIndex = -1
  let length = nums.length
  for (let i = 0; i < length; ++i) {
    if (maxIndex === -1 || nums[i] > max) {
      max = nums[i]
      maxIndex = i
    }
  }

  let L = maxIndex, R = L
  let result = max, sum = max
  while (R - L + 1 < length) {
    if (L === 0) {
      ++R
      sum += nums[R]
    } else if (R === length - 1) {
      --L
      sum += nums[L]
    } else {
      if (nums[L - 1] >= nums[R + 1]) {
        --L
        sum += nums[L]
      } else {
        ++R
        sum += nums[R]
      }
    }

    // console.log(result)

    result = Math.max(result, sum)
  }

  return result
}

module.exports = maxSubArray
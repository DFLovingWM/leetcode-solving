/**
 * Prefix sum, but need to deal with several edge cases.
 * T(N): [3980ms]
 */
function checkSubarraySum (nums, target) {
  target = Math.abs(target) // Note: target maybe negative, so make it positive firstly.

  if (nums.length < 2) { // Edge case: single element can't satisfy.
    return false
  } else {
    for (let i = 1; i < nums.length; ++i) { // Edge case: 2 consecutive '0' absolutely can satisfy.
      if (nums[i] === 0 && nums[i - 1]   === 0) {
        return true
      }
    }
    if (target === 0) { // Edge case: target may be 0, then only consecutive '0' can satisfy.
      return false
    }
  }
  
  let prefix = new Map() // Record the count of prefix sums.
  prefix.set(0, -1)
  let sum = 0
  for (let i = 0; i < nums.length; ++i) {
    let num = nums[i]
    sum += num
    for (let n = target; sum - n >= 0; n += target) { // 'sum' mod 'target' => 0
      if (prefix.has(sum - n) && i - prefix.get(sum - n) >= 2) {
        return true
      }
    }
    if (!prefix.has(sum)) prefix.set(sum, i) // Only need to record the smallest index.
  }

  return false
}

module.exports = checkSubarraySum
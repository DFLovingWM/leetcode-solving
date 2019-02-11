/**
 * Use the 'whole product' to divide each number. Need consider 0s.
 * However, the problem description forbids this solution.
 * 
 * - Time: O(N), 112ms
 * - Space: O(1)
 */
var productExceptSelf = function(nums) {
  let zeroCount = nums.reduce((acc, item) => {
    if (item === 0) {
      return acc + 1
    } else {
      return acc
    }
  }, 0)

  if (zeroCount > 1) { // Edge case 1: if the number of '0' is more than 1, then return all-0 array.
    return Array.from({ length: nums.length }, () => 0)
  } else if (zeroCount === 1) { // Edge case 2: if there's only one '0'
    let product = nums.reduce((tmpProduct, item) => {
      return tmpProduct * (item === 0 ? 1 : item)
    }, 1)
    let results = Array.from({ length: nums.length }, () => 0)
    results[nums.indexOf(0)] = product
    return results
  } else { // General cases.
    let product = nums.reduce((tmpProduct, item) => tmpProduct * item, 1)
    let results = []
    for (const num of nums) {
      let result = product / num
      results.push(result)
    }
    return results
  }
}

module.exports = productExceptSelf
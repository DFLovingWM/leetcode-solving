/**
 * Sliding window maintains the product less than target.
 */
var numSubarrayProductLessThanK = function(nums, target) {
  let L = 0, R = L
  let product = 1, count = 0

  for (; R < nums.length; ++R) { // Forward the right bound.
    product *= nums[R]
    while (product >= target) { // And adjust the left bound.
      product /= nums[L]
      ++L
    }
    console.log(`[${L}, ${R}]`)
    count += R - L + 1 // Incrementation.
  }

  return count
}

module.exports = numSubarrayProductLessThanK
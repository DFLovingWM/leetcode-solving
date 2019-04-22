/**
 * After sorting, there's only 2 possible maximum product. Just pick the bigger.
 * Time: O(NlogN), 128ms
 * Space: O(logN), 20.6MB
 */
function maximumProduct (nums) {
  nums.sort((a, b) => a - b)
  
  let { length } = nums
  return Math.max(
    nums[length - 1] * nums[length - 2] * nums[length - 3], // Rightmost 3 positive integers
    nums[0] * nums[1] * nums[length - 1] // Leftmost 2 negative integers, and max
  )
}

module.exports = maximumProduct
/**
 * 因为算dp(i)只用到了dp(i-2)和dp(i-1)，
 * 所以可以使用双指针法，将空间复杂度优化到O(1)，
 * 类比Fibonacci
 */
function rob (nums) {
  if (nums.length === 0) {
    return 0
  } else if (nums.length <= 2) {
    return Math.max(...nums)
  }

  let prev2 = 0,
      prev = nums[0]
  for (let i = 1; i < nums.length; ++i) {
    [ prev2, prev ] = [ prev, Math.max(prev2 + nums[i], prev) ]
  }

  return prev
}

module.exports = rob
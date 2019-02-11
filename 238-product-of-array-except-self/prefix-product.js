/**
 * Prefix product
 * - Time: O(N), 108ms
 * - Space: O(1)
 * 参考：https://leetcode.com/problems/product-of-array-except-self/discuss/65622/Simple-Java-solution-in-O(n)-without-extra-space
 */
var productExceptSelf = function(nums) {
  let prefix = Array.from({ length: nums.length })
  prefix[0] = 1
  for (let i = 1; i < nums.length; ++i) {
    prefix[i] = prefix[i - 1] * nums[i - 1]
  }

  let productFromRight = 1
  for (let i = nums.length - 1; i >= 0; --i) {
    prefix[i] *= productFromRight
    productFromRight *= nums[i]
  }

  return prefix
}

module.exports = productExceptSelf
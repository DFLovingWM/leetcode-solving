/**
 * 贪心(前缀和)：记录最小前缀和`min`，则有`最大子数组 = 当前前缀和 - min`
 * 
 * 时间：O(N), 80ms
 */
var maxSubArray = function(nums) {
  let prefix = 0
  let minPrefix = 0
  let res = -Infinity

  for (let i = 0; i < nums.length; ++i) {
    prefix += nums[i]
    res = Math.max(res, prefix - minPrefix)
    minPrefix = Math.min(minPrefix, prefix)
  }

  return res
};

module.exports = maxSubArray
/**
 * Hash法：暴力法的优化版本，时间复杂度降低到O(N)
 */
var twoSum = function(nums, targetSum) {
  const getIndex = new Map()
  for (let i = 0; i < nums.length; ++i) {
    if (getIndex.has(targetSum - nums[i])) {
      return [
        getIndex.get(targetSum - nums[i]),
        i
      ]
    }
    getIndex.set(nums[i], i)
  }
  return [-1, -1]
};

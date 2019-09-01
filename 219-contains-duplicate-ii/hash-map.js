/**
 * Hash法：
 * 用Map来记录下标
 */
var containsNearbyDuplicate = function(nums, K) {
  const getIndex = new Map()
  for (let i = 0; i < nums.length; ++i) {
    if (getIndex.has(nums[i]) && i - getIndex.get(nums[i]) <= K) {
      return true
    }
    getIndex.set(nums[i], i)
  }
  return false
};

/**
 * Hash法：
 * 用Set来维护大小为K的窗口
 */
var containsNearbyDuplicate = function(nums, K) {
  const kSet = new Set()
  for (let i = 0; i < nums.length; ++i) {
    if (kSet.has(nums[i])) return true
    kSet.add(nums[i])

    // 删除往前第K个元素，来维持set的容量在K以内
    if (kSet.size > K) {
      kSet.delete(nums[i - K])
    }
  }
  return false
};

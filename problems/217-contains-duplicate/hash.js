/**
 * Hash法：O(N)，耗时92ms
 * 用Set来记录元素，搜索只需要O(1)
 */
var containsDuplicate = function(nums) {
  const set = new Set()
  for (const num of nums) {
    if (set.has(num)) {
      return true
    }
    set.add(num)
  }
  return false
};
/**
 * 排序法：O(NlogN)，耗时152ms
 * 排序后，相同元素会聚集在一起，可以判断
 */
var containsDuplicate = function(nums) {
  nums = nums.slice().sort((a, b) => a - b)
  for (let i = 1; i < nums.length; ++i) {
    if (nums[i] === nums[i - 1]) { // 如果某个元素等于它前面的元素，说明有重复
      return true
    }
  }
  return false
};
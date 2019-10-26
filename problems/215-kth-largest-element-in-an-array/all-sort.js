/**
 * 全部元素排序，然后取第K个
 * O(NlogN), 耗时124ms
 */
var findKthLargest = function(nums, k) {
  nums = nums.slice().sort((a, b) => b - a)
  return nums[k - 1]
};

[
  [[3,2,1,5,6,4], 2]
].forEach(input => {
  console.log(findKthLargest(...input))
})

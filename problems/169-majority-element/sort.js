/**
 * 排序，然后中间的元素一定是众数。
 * 因为题目给出“众数”的定义是：次数超过一半长度的元素，所以中间的元素一定是众数。3=>1 4=>1/2
 * 
 * O(NlogN), 耗时124ms
 */
var majorityElement = function(nums) {
  nums = nums.slice().sort()
  return nums[Math.floor(nums.length / 2)]
};

[
  [3,2,3],
  [2,2,1,1,1,2,2],
].forEach(arr => {
  console.log(majorityElement(arr))
})

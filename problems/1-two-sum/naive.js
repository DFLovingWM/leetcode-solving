/**
 * 暴力二重循环：O(N^2)
 */
var twoSum = function(nums, targetSum) {
  for (let i = 0; i < nums.length - 1; ++i) {
    for (let j = i + 1; j < nums.length; ++j) {
      if (nums[i] + nums[j] === targetSum) {
        return [i, j]
      }
    }
  }
  return [-1, -1]
};

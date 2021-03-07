/**
 * 贪心就好
 */
var minElements = function(nums, limit, goal) {
  const sum = nums.reduce((acc, e) => acc + e, 0);
  const targetSum = goal - sum;
  return Math.ceil(Math.abs(targetSum) / limit);
};
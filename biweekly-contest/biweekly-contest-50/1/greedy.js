/**
 * 一开始以为很难。
 * 但是只加不减，所以是简单的贪心，只需要保证后一个比前一个多 1 就好
 */
var minOperations = function(nums) {
  let res = 0;
  for (let i = 1; i < nums.length; ++i) {
    if (nums[i] <= nums[i - 1]) {
      res += (nums[i - 1] + 1) - nums[i];
      nums[i] = nums[i - 1] + 1;
    }
  }
  return res;
};
/**
 * 前缀和的基本操作
 */
var runningSum = function(nums) {
  const n = nums.length;
  const res = new Array(n);
  res[0] = nums[0];
  for (let i = 1; i < nums.length; ++i) {
    res[i] = res[i - 1] + nums[i];
  }
  return res;
};
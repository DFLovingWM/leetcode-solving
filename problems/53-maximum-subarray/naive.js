/**
 * 暴力
 */
var maxSubArray = function(nums) {
  const n = nums.length;
  let res = -Infinity;
  for (let i = 0; i < n; ++i) {
    let sum = 0;
    for (let j = i; j < n; ++j) {
      sum += nums[j];
      res = Math.max(res, sum);
    }
  }
  return res;
};
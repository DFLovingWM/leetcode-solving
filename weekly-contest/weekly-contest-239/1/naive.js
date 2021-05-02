/**
 * 暴力遍历
 */
var getMinDistance = function(nums, target, start) {
  let res = Infinity;
  for (let i = 0; i < nums.length; ++i) {
    if (nums[i] === target) {
      res = Math.min(res, Math.abs(start - i));
    }
  }
  return res;
};
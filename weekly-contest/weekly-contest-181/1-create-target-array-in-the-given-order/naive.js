/**
 * 暴力
 */
var createTargetArray = function(nums, indexs) {
  const res = [];
  for (let i = 0; i < nums.length; ++i) {
    res.splice(indexs[i], 0, nums[i]);
  }
  return res;
};
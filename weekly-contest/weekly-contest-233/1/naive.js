/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAscendingSum = function(nums) {
  let res = 0;
  let acc = nums[0];
  for (let i = 1; i < nums.length; ++i) {
    if (nums[i] > nums[i - 1]) {
      acc += nums[i];
    } else {
      res = Math.max(res, acc);
      acc = nums[i];
    }
  }
  res = Math.max(res, acc);
  return res;
};
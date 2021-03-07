/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAbsoluteSum = function(nums) {
  const n = nums.length;
  const min = Array.from({ length: n }, () => Infinity);
  const max = Array.from({ length: n }, () => -Infinity);
  min[0] = max[0] = nums[0];
  let res = Math.max(0, Math.abs(nums[0]));

  for (let i = 1; i < n; ++i) {
    min[i] = Math.min(
      min[i - 1] + nums[i],
      nums[i]
    );
    max[i] = Math.max(
      max[i - 1] + nums[i],
      nums[i]
    );
    res = Math.max(
      res,
      Math.abs(min[i]),
      Math.abs(max[i])
    );
  }

  // console.log(min, max)
  return res;
};

console.log(maxAbsoluteSum([1,-3,2,3,-4]))
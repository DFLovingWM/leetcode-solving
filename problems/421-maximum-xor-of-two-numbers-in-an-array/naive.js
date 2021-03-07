/**
 * 暴力
 * 
 * 时间：O(N^2), 1716ms
 */
var findMaximumXOR = function(nums) {
  const n = nums.length;
  let res = 0;
  for (let i = 0; i < n; ++i) {
    for (let j = 0; j < n; ++j) {
      if (i !== j) {
        res = Math.max(res, nums[i] ^ nums[j]);
      }
    }
  }
  return res;
};
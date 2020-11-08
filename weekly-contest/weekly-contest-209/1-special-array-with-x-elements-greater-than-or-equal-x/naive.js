/**
 * 暴力
 * 
 * 时间：O(N^2)
 */
var specialArray = function(nums) {
  const n = nums.length;
  for (let k = n; k >= 0; --k) {
    let count = 0;
    for (let i = 0; i < n; ++i) {
      if (nums[i] >= k) {
        ++count;
      }
    }
    if (count === k) {
      return k;
    }
  }
  return -1;
};

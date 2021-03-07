/**
 * DP：空间压缩
 */
var massage = function(nums) {
  const n = nums.length;
  if (n === 0) return 0;

  let [prev, curr] = [0, nums[0]];

  for (let i = 1; i < n; ++i) {
    const prev2 = prev;
    // prev右移一步，就是旧的curr
    prev = curr;
    // curr右移一步：
    curr = Math.max(
      prev, // 选择1：不接
      nums[i] + prev2 // 选择2：接
    );
  }

  return curr;
};
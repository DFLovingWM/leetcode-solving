/**
 * 二进制状态枚举
 */
var subsetXORSum = function(nums) {
  const n = nums.length;
  let res = 0;
  for (let cover = (1 << n) - 1; cover >= 0; --cover) {
    res += xor(n, nums, cover);
  }
  return res;
};

function xor(n, nums, cover) {
  let res = 0;
  for (let i = 0; i < n; ++i) {
    if (cover & (1 << i)) {
      res ^= nums[i];
    }
  }
  return res;
}

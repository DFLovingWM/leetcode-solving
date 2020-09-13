/**
 * 贪心：尽量变为被2整除的
 */
var minOperations = function(nums) {
  let res = 0;
  const n = nums.length;
  while (true) {
    if (nums.every(num => num === 0)) break;
    for (let i = 0; i < n; ++i) {
      res += nums[i] % 2;
      nums[i] >>= 1;
    }
    ++res;
  }
  return res - 1;
};

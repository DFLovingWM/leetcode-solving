/**
 * Bottom-up DP：`f[n]`表示和为`i`的组合数
 * 
 * 时间：`O(NV)`, 96ms
 */
var combinationSum4 = function(nums, target) {
  const f = Array.from({ length: target + 1 }, () => 0)

  f[0] = 1

  for (let i = 1; i <= target; ++i) {
    for (const num of nums) {
      if (i - num >= 0) {
        f[i] += f[i - num]
      }
    }
  }

  return f[target]
};

module.exports = combinationSum4
/**
 * Bottom-up DP：
 * `f[n]`表示和为`i`的组合数，则有：
 * f[n] = sum(f[n - N]), 这里N表示每一个可能的值
 * 
 * 时间：96ms
 * 空间：37.2MB
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

// [
//   [[1, 2, 3], 4],
//   [[4,2,1], 32],
// ].forEach(input => {
//   console.log(combinationSum4(...input))
// })
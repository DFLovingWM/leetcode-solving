/**
 * 暴力
 */
var rangeSum = function(nums, n, left, right) {
  const arr = [];
  for (let i = 0; i < n; ++i) {
    let sum = 0;
    for (let j = i; j < n; ++j) {
      sum += nums[j];
      arr.push(sum);
    }
  }

  arr.sort((a, b) => a - b);

  const MOD = 1e9 + 7;
  let res = 0;
  for (let i = left - 1; i < right; ++i) {
    res += arr[i];
    res %= MOD;
  }
  return res;
};
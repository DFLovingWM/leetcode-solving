/**
 * DP空间优化
 * 
 * 时间：O(N), 120ms
 * 空间：O(1), 48.5MB
 */
var numOfSubarrays = function(arr) {
  const n = arr.length;
  const MOD = 1e9 + 7;
  let [odd, even] = [0, 0];
  let res = 0;

  for (let i = 1; i <= n; ++i) {
    if (arr[i - 1] & 1) { // 奇
      [odd, even] = [even + 1, odd];
    } else { // 偶
      [odd, even] = [odd, even + 1];
    }
    res += odd;
    res %= MOD;
  }

  return res;
};

module.exports = numOfSubarrays;
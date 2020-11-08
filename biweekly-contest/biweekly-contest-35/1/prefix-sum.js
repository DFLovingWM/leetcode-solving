/**
 * 暴力/前缀和
 */
var sumOddLengthSubarrays = function(arr) {
  const p = [0];
  for (const n of arr) {
    p.push(p[p.length - 1] + n);
  }
  const n = arr.length;
  let res = 0;
  for (let i = 0; i <= n; ++i) {
    for (let j = i + 1; j <= n; j += 2) {
      res += p[j] - p[i];
    }
  }
  return res;
};
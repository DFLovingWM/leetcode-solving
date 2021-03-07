/**
 * @param {number} n
 * @return {number}
 */
var getMaximumGenerated = function(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;
  const arr = [0, 1];
  let res = 0;
  for (let i = 2; i <= n; ++i) {
    const j = i >>> 1;
    if (i & 1) {
      arr.push(arr[j] + arr[j + 1]);
    } else {
      arr.push(arr[j]);
    }
    res = Math.max(res, arr[i]);
  }
  return res;
};
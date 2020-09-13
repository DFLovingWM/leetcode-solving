/**
 * @param {number[]} arr
 * @param {number} m
 * @param {number} k
 * @return {boolean}
 */
var containsPattern = function(arr, m, k) {
  const n = arr.length;
  if (m * k > n) return false;

  for (let i = 0; i < n; ++i) {
    let ok = true;
    for (let j = i; j < i + m * k; ++j) {
      if (arr[(j - i) % m + i] !== arr[j]) {
        ok = false;
        break;
      }
    }
    if (ok) return true;
  }
  return false;
};

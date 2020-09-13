/**
 * 暴力
 */
var findKthPositive = function(arr, k) {
  let count = 0;
  const set = new Set(arr);
  for (let i = 1; true; ++i) {
    if (!set.has(i)) {
      ++count;
      if (count === k) {
        return i;
      }
    }
  }
};

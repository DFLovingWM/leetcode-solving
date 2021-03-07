/**
 * 贪心
 */
var canPlaceFlowers = function(arr, n) {
  if (n === 0) {
    return true;
  }

  const len = arr.length;
  arr = [0, ...arr, 0];

  for (let i = 1; i < 1 + len; ++i) {
    if (arr[i] === 0 && arr[i - 1] === 0 && arr[i + 1] === 0) {
      --n;
      if (n === 0) return true;
      arr[i] = 1;
    }
  }
  return false;
};
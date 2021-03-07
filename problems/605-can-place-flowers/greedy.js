/**
 * 贪心
 */
var canPlaceFlowers = function(arr, n) {
  if (n === 0) {
    return true;
  }

  for (let i = 0; i < arr.length; ++i) {
    if (
      arr[i] === 0 &&
      (i === 0 || arr[i - 1] === 0) &&
      (i === arr.length - 1 || arr[i + 1] === 0)
    ) {
      --n;
      if (n === 0) {
        return true;
      }
      arr[i] = 1;
    }
  }
  return false;
};
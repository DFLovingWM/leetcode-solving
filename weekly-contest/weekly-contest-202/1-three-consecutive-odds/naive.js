/**
 * 直接来
 */
var threeConsecutiveOdds = function(arr) {
  for (let i = 2; i < arr.length; ++i) {
    if (
      (arr[i] & 1) &&
      (arr[i - 1] & 1) &&
      (arr[i - 2] & 1)
    ) {
      return true;
    }
  }
  return false;
};
/**
 * 排序后，判断相邻之间的差是否一样
 */
var canMakeArithmeticProgression = function(arr) {
  arr.sort((a, b) => a - b);
  const d = arr[1] - arr[0];
  for (let i = 2; i < arr.length; ++i) {
    if (arr[i] - arr[i - 1] !== d) {
      return false;
    }
  }
  return true;
};
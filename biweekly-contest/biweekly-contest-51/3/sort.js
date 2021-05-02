/**
 * 排序
 */
var maximumElementAfterDecrementingAndRearranging = function(arr) {
  arr.sort((a, b) => a - b);
  const n = arr.length;
  if (arr[0] > 1) {
    arr[0] = 1;
  }
  for (let i = 1; i < n; ++i) {
    if (arr[i] - arr[i - 1] > 1) {
      arr[i] = arr[i - 1] + 1;
    }
  }
  return arr[n - 1];
};
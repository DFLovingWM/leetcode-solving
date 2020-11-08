/**
 * 按照题意来，注意先排序
 */
var trimMean = function(arr) {
  const n = arr.length;
  arr.sort((a, b) => a - b);
  const left = n / 20;
  const right = n - left;
  let sum = 0;
  for (let i = left; i < right; ++i) {
    sum += arr[i];
  }
  return sum / (right - left);
};
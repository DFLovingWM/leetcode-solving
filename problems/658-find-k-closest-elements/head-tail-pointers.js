/**
 * 头尾指针进行排除
 * 时间：O(N + K), 100ms
 * 空间：O(1)
 */
var findClosestElements = function(arr, K, target) {
  let [L, R] = [0, arr.length - 1]
  while (R - L + 1 > K) {
    let leftDiff = Math.abs(arr[L] - target)
    let rightDiff = Math.abs(arr[R] - target)
    if (leftDiff <= rightDiff) { // 注意，题目要求相等时，取更小下标
      --R
    } else if (leftDiff > rightDiff) {
      ++L
    }
  }
  return arr.slice(L, R + 1)
};

module.exports = findClosestElements
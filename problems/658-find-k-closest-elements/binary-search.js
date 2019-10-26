/**
 * 参考答案：二分查找左边界
 * 时间：O(log(N - K) + K)
 * 空间：O(1)
 */
var findClosestElements = function(arr, K, target) {
  let [left, right] = [0, arr.length - K] // 左闭右闭
  
  while (left < right) {
    const middle = left + (right - left >> 1)

    if (target - arr[middle] <= arr[middle + K] - target) {
      right = middle
    } else {
      left = middle + 1
    }
  }

  return arr.slice(left, left + K)
};

module.exports = findClosestElements
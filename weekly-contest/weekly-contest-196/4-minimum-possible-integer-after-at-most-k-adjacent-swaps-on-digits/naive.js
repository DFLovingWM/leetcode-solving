/**
 * 暴力
 * 
 * 时间：O(N^2), 4248ms
 */
var minInteger = function(num, k) {
  const arr = num.split('');
  for (let left = 0; left < arr.length && k > 0; ++left) {
    const right = Math.min(arr.length - 1, left + k);
    let minIndex = -1; // 最小字符的下标
    for (let i = left; i <= right; ++i) {
      if (minIndex === -1 || arr[i] < arr[minIndex]) {
        minIndex = i;
      }
    }
    // 交换
    const tmp = arr[minIndex];
    arr.splice(minIndex, 1);
    arr.splice(left, 0, tmp)
    k -= minIndex - left;
  }
  return arr.join('');
};

module.exports = minInteger;
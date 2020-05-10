/**
 * 整体看待，遍历左右边界
 * 
 * 时间：O(N^2), 64ms
 */
var countTriplets = function(arr) {
  let res = 0;
  const n = arr.length;

  for (let i = 0; i < n; ++i) { // i为左闭边界
    let b = 0;
    for (let j = i; j < n; ++j) { // j为右闭边界
      b ^= arr[j];
      if (b === 0) { // 表示arr[i] ~ arr[j]这一段满足
        res += j - i;
      }
    }
  }

  return res;
};

module.exports = countTriplets;
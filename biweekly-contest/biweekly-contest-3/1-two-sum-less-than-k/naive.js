/**
 * 暴力
 * 
 * 时间：`O(N^2)`, 72ms
 */
var twoSumLessThanK = function (arr, K) {
  let res = -1
  for (let i = 0; i < arr.length; ++i) {
    for (let j = 0; j < arr.length; ++j) {
      if (i !== j) {
        const sum = arr[i] + arr[j]
        if (sum < K && K - sum < K - res) {
          res = sum
        }
      }
    }
  }
  return res
};

module.exports = twoSumLessThanK
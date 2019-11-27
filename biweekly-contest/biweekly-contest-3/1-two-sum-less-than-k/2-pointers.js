/**
 * 排序 + 双指针
 * 
 * 时间：`O(NlogN)`, 76ms
 */
var twoSumLessThanK = function (arr, K) {
  arr.sort((a, b) => a - b)
  
  let i = 0, j = arr.length - 1
  let res = -1

  while (i < j) {
    const sum = arr[i] + arr[j]

    if (sum < K) { // 比K小、满足 => 同时想找更接近的（更大的）
      if (K - sum < K - res) res = sum
      ++i
    } else { // 比K大、不满足 => 需要缩小
      --j
    }
  }

  return res
};

module.exports = twoSumLessThanK
/**
 * 排序 + 降维 + 求LIS长度
 * 
 * 时间：O(NlogN), 108ms
 */
var maxEnvelopes = function (envelopes) {
  envelopes.sort((A, B) => {
    if (A[0] !== B[0]) return A[0] - B[0] // width升序
    return B[1] - A[1] // width相同时，height降序（防止width相同时能够串联的情况）
  })
  return lengthOfLIS(envelopes.map(item => item[1])) // 只看height
};

var lengthOfLIS = function (arr) {
  const tops = [] // 牌顶

  for (const n of arr) {
    const i = bisectLeft(tops, n, 0, tops.length)

    if (i === tops.length) { // 没有位置，则另起牌堆
      tops.push(n)
    } else {
      tops[i] = n
    }
  }

  return tops.length
};

function bisectLeft (arr, target, left, right) {
  while (left < right) {
    const middle = left + (right - left >> 1)

    if (target <= arr[middle]) {
      right = middle
    } else {
      left = middle + 1
    }
  }

  return left
}

module.exports = maxEnvelopes
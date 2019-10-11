/**
 * 纸牌游戏
 * 
 * 时间：O(NlogN), 60ms
 */
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

module.exports = lengthOfLIS
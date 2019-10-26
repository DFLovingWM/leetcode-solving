/**
 * 二分查找：在10^9范围内二分枚举最小甜度，然后看能否分成(K+1)块
 * bisectRight
 * 
 * 时间：O(NlogX), 80ms
 */
var maximizeSweetness = function (sweetness, K) {
  let left = 1
  let right = Math.pow(10, 9) + 1

  while (left < right) {
    const mid = left + Math.floor((right - left) / 2) // （2）所以这里取下界中位数

    if (canDivide(sweetness, K + 1, mid)) { // （2）所以这里填入(mid+1)
      left = mid + 1 // （1）根据左闭，这里是`left=mid+1`，表示(mid+1)是候选值
    } else {
      right = mid
    }
  }

  return left - 1
}

// 如果最小甜度为min，能否分成k块
function canDivide (sweetness, k, min) {
  let count = 0
  let acc = 0
  for (let i = 0; i < sweetness.length; ++i) {
    acc += sweetness[i]
    if (acc >= min) { // 超过min，可以作为一块
      ++count
      acc = 0
    }
  }
  return count >= k
}

module.exports = maximizeSweetness
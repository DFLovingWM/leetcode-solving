/**
 * 二分查找：在10^9范围内二分枚举最小甜度，然后看能否分成(K+1)块
 * 取右中位数
 * 
 * 时间：O(NlogX), 80ms
 */
var maximizeSweetness = function (sweetness, K) {
  let left = 0 // 左开
  let right = Math.pow(10, 9) // 右闭

  while (left < right) {
    const mid = left + Math.floor((right - left + 1) / 2) // （2）右中位数

    if (canDivide(sweetness, K + 1, mid)) { // （1）如果mid作为最小甜度能满足，就尝试寻找比mid更大的
      left = mid // left扩大前，记录当前能满足的mid值
    } else {
      right = mid - 1
    }
  }

  return left
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
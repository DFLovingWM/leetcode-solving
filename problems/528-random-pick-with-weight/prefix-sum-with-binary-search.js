/**
 * 线段模拟 + 二分查找：
 * 将权重处理成N个线段，看随机叶子会落到哪一段
 * 
 * 时间：224ms
 */

// O(N)
var Solution = function (weights) {
  let acc = 0
  this.prefix = [acc] // 前缀和（表示各个线段的终点）
  for (const weight of weights) {
    acc += weight
    this.prefix.push(acc)
  }
};

// 二分查找，O(logN)
Solution.prototype.pickIndex = function () {
  const n = this.prefix.length
  const random = Math.random() * this.prefix[n - 1] // 随机数范围是：[0, 最右终点]
  const i = bisectLeft(this.prefix, random, 0, n)
  return i - 1
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

module.exports = Solution
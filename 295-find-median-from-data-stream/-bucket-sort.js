/**
 * 进阶场景优化1：数字范围为[0, 100]
 * 
 * 桶/索引排序
 */
const LENGTH = 101

var MedianFinder = function () {
  this.bucket = Array.from({ length: LENGTH }, () => 0) // 记录每个数字的频次
  this.n = 0 // 总数
};

// O(1)
MedianFinder.prototype.addNum = function (num) {
  ++this.bucket[num]
  ++this.n
};

// O(N)
MedianFinder.prototype.findMedian = function () {
  const L = Math.floor((this.n - 1) / 2)
  const R = this.n % 2 === 0 ? L + 1 : L

  let left, right
  let count = 0 // 累计
  for (let i = 0; i < LENGTH; ++i) {
    if (this.bucket[i] === 0) continue

    if (count <= L && count + this.bucket[i] > L) {
      left = i
    }
    if (count <= R && count + this.bucket[i] > R) {
      right = i
      break
    }
    count += this.bucket[i]
  }
  return (left + right) / 2
};

module.exports = MedianFinder
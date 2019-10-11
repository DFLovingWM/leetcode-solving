/**
 * 插入排序（维护有序数组）
 * 
 * 时间：O(436ms)
 */

var MedianFinder = function () {
  this.arr = []
};

// 插入新元素，找插入位置、同时移动子数组
// O(N)
MedianFinder.prototype.addNum = function (num) {
  ++this.arr.length

  let i
  for (i = this.arr.length - 2; i >= 0; --i) {
    if (this.arr[i] > num) { // 比num大的就后移一位
      this.arr[i + 1] = this.arr[i]
    } else {
      break
    }
  }
  this.arr[i + 1] = num // 插入该元素
};

// O(1)
MedianFinder.prototype.findMedian = function () {
  const L = Math.floor((this.arr.length - 1) / 2)
  const R = this.arr.length % 2 === 0 ? L + 1 : L
  return (this.arr[L] + this.arr[R]) / 2
};

module.exports = MedianFinder
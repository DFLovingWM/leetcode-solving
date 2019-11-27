/**
 * PrevGreater问题，使用单调栈
 * 
 * 时间：420ms
 */

// O(1)
var StockSpanner = function () {
  this.mono = []
  this.arr = []
};

// O(?)
StockSpanner.prototype.next = function (price) {
  const i = this.arr.length
  this.arr.push(price)

  // 细节：因为求的是严格更大值，所以等于的也要删掉
  while (this.mono.length > 0 && this.arr[i] >= this.arr[this.mono[this.mono.length - 1]]) {
    this.mono.pop()
  }
  const prev = this.mono.length > 0 ? this.mono[this.mono.length - 1] : -1
  this.mono.push(i)

  return i - prev
};

module.exports = StockSpanner
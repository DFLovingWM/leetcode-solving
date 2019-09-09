/**
 * min数组用来记录出现过的最小值（长度不大于arr）
 * 时间：O(1)，148ms
 * 空间：O(2N) = O(N)，44.2MB
 */
var MinStack = function() {
  this.arr = []
  this.min = []
};

// O(1)
MinStack.prototype.push = function(x) {
  this.arr.push(x)
  if (this.min.length === 0 || x <= this.min[this.min.length - 1]) {
    // 只加入更小的元素
    this.min.push(x)
  }
};

// O(1)
MinStack.prototype.pop = function() {
  if (this.min[this.min.length - 1] === this.arr[this.arr.length - 1]) {
    // 要
    this.min.pop()
  }
  this.arr.pop()
};

// O(1)
MinStack.prototype.top = function() {
  return this.arr[this.arr.length - 1]
};

// O(1)
MinStack.prototype.getMin = function() {
  return this.min[this.min.length - 1]
};

let a=new MinStack()
a.push(2)
a.push(0)
a.push(3)
a.push(0)
console.log(a.getMin())
a.pop()
console.log(a.getMin())
a.pop()
console.log(a.getMin())
a.pop()
console.log(a.getMin())
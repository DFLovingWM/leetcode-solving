/**
 * min数组用来记录出现过的最小值的下标（长度不大于arr）
 * 时间：O(1)，144ms
 * 空间：O(2N) = O(N)，44.7MB
 */
var MinStack = function() {
  this.arr = []
  this.min = [] // 记录每一个最小值（里程碑）的下标
};

// O(1)
MinStack.prototype.push = function(x) {
  const cur = this.arr[this.min[this.min.length - 1]]
  if (!this.min.length || x < cur) {
    // 记录当前最小值的下标
    this.min.push(this.arr.length)
  }
  this.arr.push(x)
};

// O(1)
MinStack.prototype.pop = function() {
  this.arr.pop()
  if (this.min[this.min.length - 1] === this.arr.length) {
    this.min.pop()
  }
};

// O(1)
MinStack.prototype.top = function() {
  return this.arr[this.arr.length - 1]
};

// O(1)
MinStack.prototype.getMin = function() {
  return this.arr[this.min[this.min.length - 1]]
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
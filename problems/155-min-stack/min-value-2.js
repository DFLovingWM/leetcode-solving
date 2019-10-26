/**
 * min数组用来记录当前最小值（与arr保持相同长度）
 * 时间：O(1)，168ms
 * 空间：O(2N) = O(N)，44.4MB
 */
var MinStack = function() {
  this.arr = []
  this.min = []
};

// O(1)
MinStack.prototype.push = function(x) {
  this.arr.push(x)
  if (this.min.length === 0 || x < this.min[this.min.length - 1]) {
    // 有更小的值
    this.min.push(x)
  } else {
    // 没有更小的值。但需要与arr同步，故反复添加栈顶元素
    this.min.push(this.min[this.min.length - 1])
  }
};

// O(1)
MinStack.prototype.pop = function() {
  this.min.pop()
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
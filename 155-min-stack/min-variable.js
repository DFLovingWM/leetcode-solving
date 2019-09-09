/**
 * 用变量记录最小值，push时比较，pop时重新更新
 * 时间：148ms
 * 空间：43.7MB
 */
var MinStack = function() {
  this.arr = [] // 数组，模拟stack操作
  this.min = Infinity // 记录最小值
};

// O(1)
MinStack.prototype.push = function(x) {
  this.arr.push(x)
  this.min = Math.min(this.min, x)
};

// O(N)
MinStack.prototype.pop = function() {
  let x = this.arr.pop()
  if (x === this.min) {
    this.min = Math.min(...this.arr)
  }
};

// O(1)
MinStack.prototype.top = function() {
  return this.arr[this.arr.length - 1]
};

// O(1)
MinStack.prototype.getMin = function() {
  return this.min
};

/**
 * 全O(1)
 */

// O(1)
var CustomStack = function(maxSize) {
  this.maxSize = maxSize;
  this.arr = [];
  this.acc = Array.from({ length: maxSize }, () => 0); // acc[i]表示位置i上的增量
};

// O(1)
CustomStack.prototype.push = function(x) {
  if (this.arr.length < this.maxSize) {
    this.arr.push(x);
  }
};

// 将栈顶的acc交接到新栈顶
// O(1)
CustomStack.prototype.pop = function() {
  const n = this.arr.length;
  if (n === 0) return -1;

  const topAcc = this.acc[n - 1];
  const res = topAcc + this.arr.pop();
  this.acc[n - 1] = 0; // 空位，需要清空增量
  // 如果pop完有新栈顶，则将增量交接给它
  if (n > 1) {
    this.acc[n - 2] += topAcc;
  }
  return res;
};

// 仅修改第K个增量（左边是0，不用记录）
// O(1)
CustomStack.prototype.increment = function(k, val) {
  const n = Math.min(k, this.arr.length) - 1;
  this.acc[n] += val;
};
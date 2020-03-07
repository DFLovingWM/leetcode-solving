/**
 * 维护当前的最小值（DP）
 * 
 * 时间：108ms
 * 空间：O(2N), 44.7MB
 */
var MinStack = function () {
  this.nums = []; // 数字
  this.mins = []; // 记录每个数字对应的当前最小值
};

MinStack.prototype.push = function (x) {
  if (this.nums.length === 0) {
    this.nums.push(x);
    this.mins.push(x);
  } else {
    this.nums.push(x);
    this.mins.push(Math.min(x, this.mins[this.mins.length - 1]));
  }
};

MinStack.prototype.pop = function () {
  this.nums.pop();
  this.mins.pop();
};

MinStack.prototype.top = function () {
  return this.nums[this.nums.length - 1];
};

MinStack.prototype.min = function () {
  return this.mins[this.mins.length - 1];
};
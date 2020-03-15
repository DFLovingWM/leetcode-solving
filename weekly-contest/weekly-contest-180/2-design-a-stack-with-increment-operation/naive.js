/**
 * @param {number} maxSize
 */
var CustomStack = function(maxSize) {
  this.maxSize = maxSize;
  this.arr = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
CustomStack.prototype.push = function(x) {
  if (this.arr.length === this.maxSize) return;
  this.arr.push(x);
};

/**
 * @return {number}
 */
CustomStack.prototype.pop = function() {
  if (this.arr.length === 0) return -1;
  return this.arr.pop();
};

/** 
 * @param {number} k 
 * @param {number} val
 * @return {void}
 */
CustomStack.prototype.increment = function(k, val) {
  for (let i = Math.min(k, this.arr.length) - 1; i >= 0; --i) {
    this.arr[i] += val;
  }
};

/**
 * Your CustomStack object will be instantiated and called as such:
 * var obj = new CustomStack(maxSize)
 * obj.push(x)
 * var param_2 = obj.pop()
 * obj.increment(k,val)
 */
/**
 * 数组存储 + Hash寻找
 * 
 * 时间：316ms
 * 空间：56MB
 */
var TwoSum = function() {
  this.arr = []
};

// O(1)
TwoSum.prototype.add = function(number) {
  this.arr.push(number)
};

// O(N)
TwoSum.prototype.find = function(value) {
  const set = new Set()
  for (const n of this.arr) {
    if (set.has(value - n)) return true
    set.add(n)
  }
  return false
};

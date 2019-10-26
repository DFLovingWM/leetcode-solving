/**
 * 维护sum集合：每次add都立即求出所有的sum
 */
var TwoSum = function() {
  this.nums = [] // 保存所有数字
  this.sumSet = new Set() // 保存所有sum
};

// O(N)
TwoSum.prototype.add = function(y) {
  for (const x of this.nums) {
    this.sumSet.add(x + y)
  }
  this.nums.push(y)
};

// O(1)
TwoSum.prototype.find = function(sum) {
  return this.sumSet.has(sum)
};

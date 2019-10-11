/**
 * 构造前缀和数组
 * 时间：O(N), 124ms
 */
var NumArray = function (nums) {
  this.prefix = [0]
  for (let i = 0; i < nums.length; ++i) {
    this.prefix[i + 1] = this.prefix[i] + nums[i]
  }
};

// O(1)
NumArray.prototype.sumRange = function (i, j) {
  return this.prefix[j + 1] - this.prefix[i]
};

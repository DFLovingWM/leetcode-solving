/**
 * HashMap存次数
 * 
 * 设M为不同数字的个数，即M <= N，则有：
 * 时间：O(M), 196ms
 * 空间：O(M), 47.9MB
 */
var TwoSum = function() {
  this.count = new Map()
};

// O(1)：给该数字的频次加1
TwoSum.prototype.add = function(number) {
  this.count.set(number, (this.count.get(number) || 0) + 1)
};

// O(M)
TwoSum.prototype.find = function(sum) {
  for (const x of this.count.keys()) {
    const y = sum - x
    if (this.count.has(y)) {
      // 注意，如果x与y相等，个数要在2以上，只有1个的话算不存在
      if (y !== x || this.count.get(y) >= 2) {
        return true
      }
    }
  }

  return false
};

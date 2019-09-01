// O(1)
var TwoSum = function() {
  this.count = new Map()
};

// O(1)
TwoSum.prototype.add = function(number) {
  this.count.set(number, (this.count.get(number) || 0) + 1)
};

// O(N)
TwoSum.prototype.find = function(sum) {
  for (const number of this.count.keys()) { // 因为有重复元素，这里的数量可能少于N
    const target = sum - number
    if (target === number) {
      if (this.count.has(target) && this.count.get(target) >= 2) { // 重复时，因为包括了自己，所以要有2个以上
        return true
      }
    } else {
      if (this.count.has(target)) {
        return true
      }
    }
  }
  return false
};

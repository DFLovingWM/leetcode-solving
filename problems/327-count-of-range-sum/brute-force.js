/**
 * 暴力
 * 
 * 时间：$O(N^{2})$，272ms
 */
var countRangeSum = function(nums, lower, upper) {
  let count = 0
  for (let i = 0; i < nums.length; ++i) {
    let sum = 0
    for (let j = i; j < nums.length; ++j) {
      sum += nums[j]
      if (sum <= upper && sum >= lower) {
        ++count
      }
    }
  }
  return count
};

module.exports = countRangeSum

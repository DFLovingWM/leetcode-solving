/**
 * 暴力O(N2)，耗时272ms
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

[
  [[-2,5,-1], -2, 2],
].forEach(input => {
  console.log(countRangeSum(...input))
})

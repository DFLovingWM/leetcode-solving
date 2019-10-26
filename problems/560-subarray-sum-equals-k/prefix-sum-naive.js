/**
 * 前缀和 + 暴力：O(N^2)
 */
var subarraySum = function(nums, targetSum) {
  const prefix = [0]
  for (const num of nums) {
    prefix.push(prefix[prefix.length - 1] + num)
  }

  let count = 0
  for (let i = 1; i < prefix.length; ++i) {
    for (let j = 0; j < i; ++j) {
      const sum = prefix[i] - prefix[j]
      if (sum === targetSum) {
        ++count
      }
    }
  }
  return count
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {
  let res = 0;
  const n = nums.length;
  for (let i = 0; i < n; ++i) {
    for (let j = i + 1; j < n; ++j) {
      if (nums[i] === nums[j]) {
        ++res;
      }
    }
  }
  return res;
};
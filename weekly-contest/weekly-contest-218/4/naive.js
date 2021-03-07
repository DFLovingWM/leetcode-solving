/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minimumIncompatibility = function(nums, k) {
  const n = nums.length;
  const freq = Array.from({ length: n + 1 }, () => 0);
  for (const num of nums) {
    ++freq[num];
    if (freq[num] > k) return -1;
  }
  
};
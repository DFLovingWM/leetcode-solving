/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function(nums) {
  const arr = nums.join('').split('0').map(s => s.length);
  if (arr.length === 1) {
    return arr[0] - 1;
  }

  let res = 0;
  for (let i = 1; i < arr.length; ++i) {
    const tmp = arr[i] + arr[i - 1];
    res = Math.max(res, tmp);
  }
  return res;
};
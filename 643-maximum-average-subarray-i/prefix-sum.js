/**
 * 前缀和
 * 时间：O(N), 108ms
 */
var findMaxAverage = function (nums, k) {
  const prefix = [0]
  for (let i = 0; i < nums.length; ++i) {
    prefix[i + 1] = prefix[i] + nums[i]
  }
  
  let res = -Infinity
  for (let i = k; i < prefix.length; ++i) {
    res = Math.max(res, (prefix[i] - prefix[i - k]) / k)
  }

  return res
};
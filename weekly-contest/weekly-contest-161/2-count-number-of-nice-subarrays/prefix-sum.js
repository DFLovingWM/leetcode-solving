/**
 * 前缀和：奇数化为1、偶数化为0
 * 
 * 时间：`O(N)`, 148ms
 * 空间：`O(N)`
 */
var numberOfSubarrays = function (nums, K) {
  let acc = 0
  const prefix = new Map()
  prefix.set(acc, 1)
  let res = 0

  for (let i = 0; i < nums.length; ++i) {
    acc += nums[i] % 2
    res += prefix.get(acc - K) || 0
    prefix.set(acc, (prefix.get(acc) || 0) + 1)
  }

  return res
};

module.exports = numberOfSubarrays
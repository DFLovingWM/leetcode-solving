/**
 * 记录每个奇数的下标，直接对两边的间隔用乘法
 * 
 * 时间：`O(N)`, 104ms
 * 空间：`O(N)`
 */
var numberOfSubarrays = function (nums, K) {
  const arr = [] // 记录奇数坐标
  for (let i = 0; i < nums.length; ++i) {
    if (nums[i] & 1) {
      arr.push(i)
    }
  }

  let res = 0
  for (let i = K - 1; i < arr.length; ++i) {
    let L = i - K + 1
    let R = i
    let left = L === 0 ? arr[L] + 1 : arr[L] - arr[L - 1]
    let right = R === arr.length - 1 ? nums.length - arr[R] : arr[R + 1] - arr[R]
    res += left * right
  }
  return res
};

module.exports = numberOfSubarrays
/**
 * 动态规划：需要2个DP数组
 * 
 * 时间：O(N^2), 108ms
 */
var findNumberOfLIS = function (nums) {
  const n = nums.length

  const len = Array.from({ length: n }, () => 1) // 以arr[i]结尾的最长子序列的长度
  const cnt = Array.from({ length: n }, () => 1) // 以arr[i]结尾的最长子序列的个数
  let maxLen = 1

  for (let i = 1; i < n; ++i) {

    // 找max
    for (let j = 0; j < i; ++j) {
      if (nums[j] < nums[i]) { // 可以拼接
        if (len[j] + 1 > len[i]) { // 有更长的
          len[i] = len[j] + 1
          cnt[i] = cnt[j]
        } else if (len[j] + 1 === len[i]) { // 同等长度的
          cnt[i] += cnt[j]
        }
      }
    }

    maxLen = Math.max(maxLen, len[i]) // 记录最长长度
  }

  // 累计最长子序列的个数
  let res = 0
  for (let i = 0; i < n; ++i) {
    if (len[i] === maxLen) res += cnt[i]
  }

  return res
};

module.exports = findNumberOfLIS
/**
 * 时间：O(N^2)，92ms
 */
var lengthOfLIS = function (arr) {
  const n = arr.length
  if (n === 0) return 0

  const dp = Array.from({ length: n }, () => 1)
  let res = 1

  for (let i = 1; i < n; ++i) {
    // 找比arr[i]小的、最长的
    for (let j = 0; j < i; ++j) {
      if (arr[j] < arr[i]) {
        dp[i] = Math.max(dp[i], dp[j] + 1)
      }
    }

    res = Math.max(res, dp[i])
  }

  return res
};

module.exports = lengthOfLIS
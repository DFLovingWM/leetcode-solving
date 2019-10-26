/**
 * 排序 + 求LIS长度
 * 
 * 时间：O(N^2), 448ms
 */
var maxEnvelopes = function (envelopes) {
  envelopes.sort((a, b) => {
    return (a[0] - b[0]) || (a[1] - b[1])
  })

  const n = envelopes.length
  const dp = Array.from({ length: n }, () => 1)
  let res = 0

  for (let i = 0; i < n; ++i) {
    let max = 1
    for (let j = 0; j < i; ++j) {
      if (envelopes[j][0] < envelopes[i][0] && envelopes[j][1] < envelopes[i][1]) {
        max = Math.max(max, dp[j] + 1)
      }
    }
    dp[i] = max
    res = Math.max(res, dp[i])
  }

  return res
};

module.exports = maxEnvelopes
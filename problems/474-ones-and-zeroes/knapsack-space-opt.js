/**
 * Bottom-up DP（背包问题） + 空间压缩
 * 
 * 时间：O(N^3), 160ms
 * 空间：O(N^2), 35.8MB
 */
var findMaxForm = function (words, M, N) {
  // 提前数好有多少个0、1
  words = words.map(word => {
    let one = 0, zero = 0
    for (const ch of word) {
      if (ch === '0') {
        ++zero
      } else if (ch === '1') {
        ++one
      }
    }
    return [zero, one]
  })

  // 二维
  const dp = new Array(M + 1).fill(0).map(() => {
    return new Array(N + 1).fill(0)
  })

  for (let i = 1; i <= words.length; ++i) {
    const [zero, one] = words[i - 1]

    // 逆序
    for (let m = M; m >= 0; --m) {
      for (let n = N; n >= 0; --n) {
        if (m >= zero && n >= one) { // 能买
          dp[m][n] = Math.max(dp[m][n], dp[m - zero][n - one] + 1)
        }
      }
    }
  }

  return dp[M][N]
};

module.exports = findMaxForm
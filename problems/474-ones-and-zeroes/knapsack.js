/**
 * Bottom-up DP（背包问题）
 * 
 * 时间：O(N^3), 360ms
 * 空间：O(N^3), 114.7MB
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

  const dp = new Array(words.length + 1).fill(0).map(() => {
    return new Array(M + 1).fill(0).map(() => {
      return new Array(N + 1).fill(0)
    })
  })

  for (let i = 1; i <= words.length; ++i) {
    const [zero, one] = words[i - 1]

    for (let m = 0; m <= M; ++m) {
      for (let n = 0; n <= N; ++n) {
        if (m >= zero && n >= one) { // 能买
          dp[i][m][n] = Math.max(dp[i - 1][m][n], dp[i - 1][m - zero][n - one] + 1)
        } else { // 不能买
          dp[i][m][n] = dp[i - 1][m][n]
        }
      }
    }
  }

  return dp[words.length][M][N]
};

module.exports = findMaxForm
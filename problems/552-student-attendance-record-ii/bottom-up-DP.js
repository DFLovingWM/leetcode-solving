/**
 * Bottom-up DP:
 * `dp[i][a][l]`表示前i次活动，缺席了a次、连续迟到l次的方案数
 * 
 * 时间：O(N), 5184ms
 * 空间：O(N), 145.4MB
 */

const MOD = Math.pow(10, 9) + 7

var checkRecord = function (n) {
  const dp = Array.from({ length: n + 1 }, () => {
    return Array.from({ length: 2 }, () => {
      return Array.from({ length: 3 }, () => {
        return 0
      })
    })
  })

  dp[0][0][0] = 1

  for (let i = 1; i <= n; ++i) {
    dp[i][0][0] = (dp[i - 1][0][0] + dp[i - 1][0][1] + dp[i - 1][0][2]) % MOD // P
    dp[i][0][1] = dp[i - 1][0][0] // L
    dp[i][0][2] = dp[i - 1][0][1] // L
    dp[i][1][0] = (dp[i - 1][1][0] + dp[i - 1][1][1] + dp[i - 1][1][2] + // P
      dp[i - 1][0][0] + dp[i - 1][0][1] + dp[i - 1][0][2]) % MOD // A
    dp[i][1][1] = dp[i - 1][1][0] // L
    dp[i][1][2] = dp[i - 1][1][1] // L
  }

  let res = 0
  for (let a = 0; a <= 1; ++a) {
    for (let l = 0; l <= 2; ++l) {
      res = (res + dp[n][a][l]) % MOD
    }
  }
  return res
};

module.exports = checkRecord
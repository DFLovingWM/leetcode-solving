// 上一个（推导过来的上一个字母）
const PREVS = {
  0: [1, 2, 4],
  1: [0, 2],
  2: [1, 3],
  3: [2],
  4: [2, 3]
}

const MOD = Math.pow(10, 9) + 7

/**
 * Bottom-up DP
 * 设`dp[i][v]`为第i个元素为v的组合数
 * 
 * 时间：244ms
 */
var countVowelPermutation = function (n) {
  const dp = Array.from({ length: n }, () => Array.from({ length: 5 }, () => 0))
  
  for (let v = 0; v < 5; ++v) {
    dp[0][v] = 1
  }

  for (let i = 1; i < n; ++i) {
    for (let v = 0; v < 5; ++v) {
      for (const prev of PREVS[v]) {
        dp[i][v] = (dp[i][v] + dp[i - 1][prev] % MOD) % MOD
      }
    }
  }

  let res = 0
  for (let v = 0; v < 5; ++v) {
    res = (res + dp[n - 1][v]) % MOD
  }
  return res
};

module.exports = countVowelPermutation
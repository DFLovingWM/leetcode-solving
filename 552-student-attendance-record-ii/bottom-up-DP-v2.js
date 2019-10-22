/**
 * Bottom-up DP: 空间优化版本
 * 
 * 时间：O(N), 108ms
 * 空间：O(1), 37.8MB
 */

const MOD = Math.pow(10, 9) + 7

var checkRecord = function (n) {
  let [a, b, c, d, e, f] = [1, 0, 0, 0, 0, 0]

  for (let i = 1; i <= n; ++i) {
    [a, b, c, d, e, f] = [(a + b + c) % MOD, a, b, (d + e + f + a + b + c) % MOD, d, e]
  }

  return (a + b + c + d + e + f) % MOD
};

module.exports = checkRecord
/**
 * Catalan数，通项公式
 */
const MOD = Math.pow(10, 9) + 7

var numberOfWays = function (numPeople) {
  const numPair = numPeople / 2
  const dp = new Array(numPair).fill(0)
  dp[0] = dp[1] = 1

  for (let n = 2; n <= numPair; ++n) {
    dp[n] = dp[n - 1] * (4 * n - 2) / (n + 1) % MOD
  }

  return dp[numPair]
};

module.exports = numberOfWays
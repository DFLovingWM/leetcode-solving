function coinChange (coins, amount) {
  const MAX = amount + 1

  let dp = Array.from({ length: amount + 1 }, () => MAX)
  dp[0] = 0

  for (const coin of coins) {
    for (let i = 0; i + coin <= amount; ++i) {
      dp[i + coin] = Math.min(dp[i + coin], dp[i] + 1)
    }
  }

  return dp[amount] === MAX ? -1 : dp[amount]
}

module.exports = coinChange
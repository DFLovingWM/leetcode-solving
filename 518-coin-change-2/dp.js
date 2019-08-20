/**
 * dp[i]表示和为i的组合数
 */
var change = function(target, coins) {
  let dp = Array.from({ length: target + 1 }, () => 0)

  dp[0] = 1
  for (const coin of coins) {
    for (let i = coin; i <= target; ++i) {
      if (i - coin >= 0) {
        dp[i] += dp[i - coin]
      }
    }
  }

  return dp[target]
};

[
  [5, [1, 2, 5]],
  [3, [2]],
  [10, [10]]
].forEach(input => {
  console.log(change(...input))
})

const MOD = Math.pow(10, 9) + 7

/**
 * dp[i]表示和为i时的数量
 */
var numRollsToTarget = function(D, F, target) {
  let dp = Array.from({ length: target + 1 }, () => 0)

  dp[0] = 1
  for (let loop = 0; loop < D; ++loop) { // 对于每个骰子
    let newDp = Array.from({ length: target + 1 }, () => 0) // 临时数组，表示新一轮的和

    for (let i = 1; i <= target; ++i) { // 对于每个可能的新的和
      for (let f = 1; f <= F; ++f) { // 可以加上的点数
        if (i - f >= 0) {
          newDp[i] = (newDp[i] + dp[i - f]) % MOD
        }
      }
    }

    dp = newDp
  }

  return dp[target]
};

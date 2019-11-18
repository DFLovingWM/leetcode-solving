/**
 * Bottom-up DP，空间优化
 * 
 * 时间：`O(N)`, 104ms
 * 空间：`O(1)`
 */
var maxSumDivThree = function (nums) {
  // dp[mod]表示当前除以3余数为mod的最大和
  let dp = Array.from({ length: 3 }, () => -Infinity)
  dp[0] = [0]

  for (let i = 0; i < nums.length; ++i) {
    const nextDp = dp.slice()

    for (let j = 0; j < 3; ++j) { // 当前余数
      const prevJ = (j - nums[i] % 3 + 3) % 3 // 上一个余数
      nextDp[j] = Math.max(nextDp[j], dp[prevJ] + nums[i])
    }

    dp = nextDp
  }

  return dp[0]
};

module.exports = maxSumDivThree
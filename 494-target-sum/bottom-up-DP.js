/**
 * Bottom-up DP：dp[s]表示和为s的方案数，则有：
 * dp[s] = dp[s - n] + dp[s + n]
 * 
 * 时间：小于O(N*S), 124ms
 * 空间：O(S)
 */
var findTargetSumWays = function (nums, targetSum) {
  let curr = new Map() // 滚动Map（sum可能出现负数，数组下标hold不住）
  curr.set(0, 1)

  for (let i = 0; i < nums.length; ++i) {
    const next = new Map() // 下一轮

    for (const [sum, count] of curr.entries()) {
      add(next, sum + nums[i], count) // 加
      add(next, sum - nums[i], count) // 减
    }

    curr = next
  }

  return curr.has(targetSum) ? curr.get(targetSum) : 0
};

function add (map, key, acc) {
  map.set(key, (map.get(key) || 0) + acc)
}

module.exports = findTargetSumWays
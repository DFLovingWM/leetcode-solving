/**
 * DP：
 * dp(i)表示过完第i天(“过完”指闭区间)所花费的最少金额。而对于第i天来说：
 * 1. 如果之前没有购买“N天票”(即没有覆盖i)，则只能选“日票”(1-day)，所以费用为：dp(i-1) + costs(0)
 * 2. 如果之前购买的“7天票”覆盖到i，则可能是：第(i-6)天～第(i)天 任意一天买的，所以费用为：
 *    第(i-6)天买的“7天票”：dp(i-7) + costs(1)
 *    第(i-5)天买的“7天票”：dp(i-6) + costs(1)
 *    (中间省略……)
 *    第(i)天买的“7天票”：dp(i-1) + costs(1)
 *    因为题目需要选择min，而费用是递增的，所以该方案最终取：dp(i-7) + costs(1)
 * 3. 如果之前购买的“30天票”覆盖到i，则可能是：第(i-29)～第(i)天 任意一天买的，思路与“7天票”一样，最终费用为：dp(i-30) + costs(2)
 * 综合来说，dp(i)要取三者中的min，这便是状态转移方程
 * 
 * 参考：
 * https://leetcode.com/problems/minimum-cost-for-tickets/discuss/226670/Java-DP-Solution-with-explanation-O(n)
 */
function mincostTickets (days, costs) {
  let targetDay = days[days.length - 1]

  let exist = new Map()
  for (const day of days) {
    exist.set(day, true)
  }

  let dp = Array.from({ length: targetDay + 1 }, () => Infinity)
  dp[0] = 0
  for (let i = 1; i <= targetDay; ++i) {
    if (!exist.has(i)) { // If no travel that day, just give the same cost as its yesterday.
      dp[i] = dp[i - 1]
    } else {
      dp[i] = Math.min(
        dp[i - 1] + costs[0], // 1-day
        dp[Math.max(0, i - 7)] + costs[1], // 7-day
        dp[Math.max(0, i - 30)] + costs[2] // 30-day
      )
    }
  }

  // console.log(dp)

  return dp[targetDay]
}

module.exports = mincostTickets
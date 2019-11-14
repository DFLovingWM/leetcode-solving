/**
 * Top-down DP
 * 
 * 时间：`O(N)`, 76ms
 */
var mincostTickets = function (days, costs) {
  const needTravel = new Set(days)
  const targetDay = days[days.length - 1]
  const cache = new Map()
  
  // 递归函数：表示当前是第`curr`天、要覆盖全部旅游日的最少花费
  function helper (curr) {
    if (curr > targetDay) return 0
    if (!needTravel.has(curr)) return helper(curr + 1) // 第`curr`天不需要旅游

    if (cache.has(curr)) return cache.get(curr)

    const res = Math.min( // 取花费最少的方案
      costs[0] + helper(curr + 1), // 1日票
      costs[1] + helper(curr + 7), // 7日票
      costs[2] + helper(curr + 30) // 30日票
    )
    cache.set(curr, res)
    return res
  }

  return helper(1)
};

module.exports = mincostTickets
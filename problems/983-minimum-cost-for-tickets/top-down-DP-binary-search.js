/**
 * Top-down DP
 * 
 * 时间：`O(N)`, 72ms
 */
var mincostTickets = function (days, costs) {
  const cache = new Map()
  
  // 递归函数：表示当前是第`curr`天、要覆盖全部旅游日的最少花费
  function helper (curr) {
    // 找需要旅行的下一天：使用二分查找，找“比它大的”
    const i = bisectRight(days, curr - 0.1, 0, days.length)
    if (i === days.length) return 0
    // 直接跳到那一天
    curr = days[i]

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

function bisectRight (arr, x, left, right) {
  while (left < right) {
    const mid = left + (right - left >>> 1)
    if (x >= arr[mid]) {
      left = mid + 1
    } else {
      right = mid
    }
  }
  return left
}

module.exports = mincostTickets
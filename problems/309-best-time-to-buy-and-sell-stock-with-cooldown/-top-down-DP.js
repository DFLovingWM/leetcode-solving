/**
 * Top-down DP（差最后2个cases，N=4000时超时）
 * 
 * 时间：O(N^3)
 */
var maxProfit = function (prices) {
  const cache = new Map()

  // 表示：当前是第`i`天、上一次持有股票`prevBuy`、上一次出售股票`prevSell`，最终能获取的最大收益
  function helper (i, prevBuy, prevSell) {
    if (i === prices.length) {
      return 0
    }

    const key = `${i},${prevBuy},${prevSell}`
    if (cache.has(key)) return cache.get(key)

    // 对于第`i`天的股票，有3种策略：购买、出售、不动
    let res = helper(i + 1, prevBuy, prevSell) // 不动
    if (prevBuy === null && (prevSell === null || prevSell < i - 1)) { // 购买
      res = Math.max(res, helper(i + 1, i, null))
    }
    if (prevBuy !== null && prices[i] > prices[prevBuy]) { // 出售
      res = Math.max(res, prices[i] - prices[prevBuy] + helper(i + 1, null, i))
    }
    cache.set(key, res)
    return res
  }

  return helper(0, null, null)
}

module.exports = maxProfit;

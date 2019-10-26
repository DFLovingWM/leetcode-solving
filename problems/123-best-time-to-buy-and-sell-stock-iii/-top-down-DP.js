/**
 * Top-down DP(N过大，栈溢出，不是TLE)
 */
var maxProfit = function (prices) {
  const cache = new Map()

  /**
   * 递归函数
   * @param {number} i 第i天股票
   * @param {number} bought 已持有某一天股票
   * @paran {number} chance 剩余机会
   * @returns {number} 收益
   */
  function dfs (i, bought, chance) {
    if (i === prices.length || chance === 0) {
      return 0
    }

    const key = getKey(i, bought, chance)
    if (cache.has(key)) return cache.get(key)
    
    let res = 0
    if (bought === -1) { // 手上没股票
      res = Math.max(res, dfs(i + 1, bought, chance)) // 不买入
      res = Math.max(res, dfs(i + 1, i, chance) - prices[i]) // 买入
    } else { // 手上有股票
      res = Math.max(res, dfs(i + 1, bought, chance)) // 不卖出
      if (prices[i] > prices[bought]) {
        res = Math.max(res, dfs(i + 1, -1, chance - 1) + prices[i]) // (不亏本的情况下)卖出
      }
    }
    cache.set(key, res)
    return res
  }

  return dfs(0, -1, 2, 0)
};

function getKey (i, bought, chance) {
  return `${i},${bought},${chance}`
}

module.exports = maxProfit
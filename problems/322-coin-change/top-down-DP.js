/**
 * Top-down DP
 * 
 * 时间：`O(NV)`, 288ms
 */
var coinChange = function (coins, target) {
  const cache = new Map()

  /**
   * 递归函数：表示当前是`curr`、要组成`target`的最短方案长度
   */
  function helper (curr) {
    if (curr === target) return 0
    if (curr > target) return Infinity

    if (cache.has(curr)) return cache.get(curr)

    let res = Infinity
    for (const coin of coins) {
      res = Math.min(res, helper(curr + coin) + 1)
    }
    cache.set(curr, res)
    return res
  }

  const res = helper(0)
  return res === Infinity ? -1 : res
};

module.exports = coinChange
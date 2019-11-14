/**
 * Top-down DP
 * 
 * 时间：`O(NlogN + NV)`
 */
var change = function (target, coins) {
  coins.sort((a, b) => a - b) // 排序：升序。用以防止重复

  const cache = new Map()
  
  /**
   * 递归函数：表示和为`n`、尾数是`prev`的组合数
   */
  function helper (n, prev) {
    if (n === target) return 1
    if (n > target) return 0

    const key = `${n}, ${prev}`
    if (cache.has(key)) return cache.get(key)

    let res = 0
    for (const coin of coins) {
      if (coin >= prev) {
        res += helper(n + coin, coin)
      }
    }
    cache.set(key, res)
    return res
  }

  return helper(0, 1)
};

module.exports = change
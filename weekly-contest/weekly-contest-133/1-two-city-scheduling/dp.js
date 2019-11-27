/**
 * 分配问题 => 动态规划
 * 
 * 时间：`O(N^2)`, 80ms
 */
var twoCitySchedCost = function (costs) {
  const n = costs.length / 2
  const cache = new Map()

  // 递归函数：
  // 前`i`个人，有`A`个人去城市A
  function helper (i, A) {
    if (i === n * 2) return 0

    const key = `${i},${A}`
    if (cache.has(key)) return cache.get(key)

    let res = Infinity
    if (A < n) {
      res = Math.min(res, costs[i][0] + helper(i + 1, A + 1)) // 去A
    }
    if (i - A < n) {
      res = Math.min(res, costs[i][1] + helper(i + 1, A)) // 去B
    }
    cache.set(key, res)
    return res
  }

  return helper(0, 0, 0)
};

module.exports = twoCitySchedCost;
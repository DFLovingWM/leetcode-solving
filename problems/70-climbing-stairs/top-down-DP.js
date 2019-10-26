/**
 * Top-down DP
 * 
 * 时间：52ms
 */
var climbStairs = function (n, cache = new Map()) {
  if (n === 0 || n === 1) return 1
  if (cache.has(n)) return cache.get(n)

  const res = climbStairs(n - 1, cache) + climbStairs(n - 2, cache)
  cache.set(n, res)
  return res
};

module.exports = climbStairs
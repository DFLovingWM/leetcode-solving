/**
 * Top-down DP
 */
var findIntegers = function (num) {
  let n = 0
  let tmp = num
  while (tmp) {
    tmp = tmp >>> 1
    ++n
  }

  const cache = new Map()

  function getKey (i, prev) {
    return `${i}, ${prev}`
  }

  function dfs (i, prev) {
    if (i === n) return 0

    const key = getKey(i, prev)
    if (cache.has(key)) return cache.get(key)

    let res = 0

    let curr = prev << 1 // 加0
    res += dfs(i + 1, 0) + (curr <= num ? 1 : 0)

    if (prev !== 1) {
      curr = prev << 1 ^ 1 // 加1
      res += dfs(i + 1, 1) + (curr <= num ? 1 : 0)
    }
    cache.set(key, res)
    return res
  }

  return 2 + dfs(1, 1) // 起点
};

module.exports = findIntegers
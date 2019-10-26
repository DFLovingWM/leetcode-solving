/**
 * Top-down DP
 */
const MOD = Math.pow(10, 9) + 7

var checkRecord = function (n) {

  function dfs (i, aCount, lConseCount) {
    if (i === n) return 1

    let res = 0
    if (aCount === 0) { // 选A: 如果没有缺勤过，则可以缺勤一次
      res = (res + dfs(i + 1, 1, lConseCount)) % MOD
    }
    if (lConseCount < 2) { // 选L: 如果连续迟到不够2次，则可以继续迟到
      res = (res + dfs(i + 1, aCount, lConseCount + 1)) % MOD
    }
    // 选P：到场总是允许的
    res = (res + dfs(i + 1, aCount, lConseCount)) % MOD
    return res
  }

  dfs = cache(dfs)

  return dfs(0, 0, 0)
};

function cache (f) {
  const m = new Map()
  
  return function (...args) {
    const key = args.join('#')
    if (m.has(key)) return m.get(key)

    const res = f(...args)
    m.set(key, res)
    return res
  }
}

module.exports = checkRecord
/**
 * Top-down DP
 * 
 * 时间：1344ms
 */

const MOD = Math.pow(10, 9) + 7

// 结点关系
const NEXTS = {
  0: [4, 6],
  1: [6, 8],
  2: [7, 9],
  3: [4, 8],
  4: [3, 9, 0],
  5: [],
  6: [1, 7, 0],
  7: [2, 6],
  8: [1, 3],
  9: [2, 4]
}

var knightDialer = function (N) {
  const cache = new Map()

  function dfs (curr, restTime) {
    if (restTime === 0) return 1

    const key = getKey(curr, restTime)
    if (cache.has(key)) return cache.get(key)

    let res = 0
    for (const next of NEXTS[curr]) {
      res = (res + dfs(next, restTime - 1)) % MOD
    }
    cache.set(key, res)
    return res
  }

  let res = 0
  for (let i = 0; i <= 9; ++i) { // 初始：从所有号码出发
    res = (res + dfs(i, N - 1)) % MOD
  }
  return res
};

function getKey (curr, restTime) {
  return `${curr}, ${restTime}`
}

module.exports = knightDialer
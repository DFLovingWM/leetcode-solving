/**
 * Top-down DP
 * 
 * 时间：1328ms
 */
const MOD = Math.pow(10, 9) + 7

var dieSimulator = function (n, rollMax) {
  const cache = new Map()

  function getKey (number, count, restTime) {
    return `${number},${count},${restTime}`
  }

  /**
   * 递归函数
   * @param {Number} number 数字
   * @param {Number} count number的连续个数
   * @param {Number} restTime 剩下次数
   */
  function dfs (number, count, restTime) {
    if (restTime === 0) return 1

    const key = getKey(number, count, restTime)
    if (cache.has(key)) return cache.get(key)

    let res = 0
    for (let i = 0; i < 6; ++i) {
      if (i !== number) { // 与上一个数字不同
        res = (res % MOD + dfs(i, 1, restTime - 1) % MOD) % MOD
      } else if (count + 1 <= rollMax[i]) { // 与上一个数字相同、但是不超过K次
        res = (res % MOD + dfs(i, count + 1, restTime - 1) % MOD) % MOD
      }
    }
    cache.set(key, res)
    return res
  }

  return dfs(-1, 0, n)
};

module.exports = dieSimulator
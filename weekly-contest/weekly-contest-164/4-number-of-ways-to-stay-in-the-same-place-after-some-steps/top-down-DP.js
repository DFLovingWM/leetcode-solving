/**
 * Top-down DP
 * 
 * 时间：`O(S^2)`, 500ms
 */
const MOD = Math.pow(10, 9) + 7

var numWays = function (steps, arrLen) {
  const cache = new Map()

  // 递归函数：
  // 每一步有3种选择
  function helper (currStep, currIndex) {
    if (currStep === steps) {
      if (currIndex === 0) { // 在原地
        return 1
      } else {
        return 0
      }
    }
    
    const key = `${currStep},${currIndex}`
    if (cache.has(key)) return cache.get(key)

    let res = 0
    // 不动
    res = (res + helper(currStep + 1, currIndex)) % MOD
    // 左
    if (currIndex > 0) {
      res = (res + helper(currStep + 1, currIndex - 1)) % MOD
    }
    // 右
    if (currIndex < arrLen - 1) {
      res = (res + helper(currStep + 1, currIndex + 1)) % MOD
    }
    cache.set(key, res)
    return res
  }

  return helper(0, 0)
};

module.exports = numWays
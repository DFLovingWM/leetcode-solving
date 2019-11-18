/**
 * Top-down DP
 */
var maximumSum = function (arr) {
  const max = arr.reduce((a, b) => Math.max(a, b), -Infinity)
  if (max <= 0) return max

  const cache = new Map()
  let maxRes = -Infinity
  
  /**
   * 递归函数
   * @param {number} i 子数组开始下标
   * @param {number} restDelete 剩余删除次数
   * @returns {number} 最大子数组和
   */
  function helper (i, restDelete) {
    if (i === arr.length) return 0

    const key = `${i},${restDelete}`
    if (cache.has(key)) return cache.get(key)

    let res = arr[i] // 1. 单独
    res = Math.max(res, arr[i] + helper(i + 1, restDelete)) // 2. 与后面连在一起
    if (restDelete > 0) {
      res = Math.max(res, helper(i + 1, restDelete - 1)) // 3. 与后面连在一起，但是删除本元素
    }
    cache.set(key, res)
    maxRes = Math.max(maxRes, res)
    return res
  }

  helper(0, 1)
  return maxRes
};

module.exports = maximumSum
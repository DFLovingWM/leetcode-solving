/**
 * Top-down DP
 * 
 * 时间：56ms
 */
var numTrees = function (n) {
  const cache = new Map()

  /**
   * 递归函数
   * @param {number} left 
   * @param {number} right
   * @returns {number} left～right这些结点构成的不同BST的数量 
   */
  function f (left, right) {
    const length = right - left + 1
    if (length === 0 || length === 1) return 1

    // 长度相等，组合就相等，与left、right无关
    // 所以这里用length进行哈希
    if (cache.has(length)) return cache.get(length)

    let res = 0
    // 遍历可能作为subRoot的结点，分成两半
    for (let i = left; i <= right; ++i) {
      res += f(left, i - 1) * f(i + 1, right)
    }
    cache.set(length, res)
    return res
  }

  return f(1, n)
};

module.exports = numTrees
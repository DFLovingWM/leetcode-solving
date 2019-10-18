/**
 * Top-down DP（版本2）：
 * 发现答案跟具体的起点、终点无关，只与结点数有关，所以只需要一个参数`n`
 * 
 * 时间：56ms
 */
var numTrees = function (N) {
  const cache = new Map()

  /**
   * 递归函数
   * @param {number} n 结点数量
   * @returns {number} BST数量
   */
  function f (n) {
    if (n === 0 || n === 1) return 1
    if (cache.has(n)) return cache.get(n)

    let res = 0
    for (let i = 0; i < n; ++i) {
      res += f(i) * f(n - 1 - i)
    }
    cache.set(n, res)
    return res
  }

  return f(N)
};

module.exports = numTrees
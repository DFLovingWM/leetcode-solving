/**
 * Top-down DP
 * 
 * 时间：84ms
 */
var generateTrees = function (N) {
  if (N < 1) return []

  const cache = new Map()

  /**
   * 递归函数
   * @param {number} l 最小结点
   * @param {number} r 最大结点
   * @returns {TreeNode[]} 子树数组
   */
  function f (l, r) {
    if (l > r) return [null]
    if (l === r) return [new TreeNode(l)]

    const key = getKey(l, r)
    if (cache.has(key)) return cache.get(key)

    const res = []
    for (let i = l; i <= r; ++i) { // 挑选子根
      for (const left of f(l, i - 1)) { // 左子树列表
        for (const right of f(i + 1, r)) { // 右子树列表
          const subRoot = new TreeNode(i) // 注意：这里需要每次创建新结点，以免在其它地方被mutate
          subRoot.left = left
          subRoot.right = right
          res.push(subRoot)
        }
      }
    }
    cache.set(key, res)
    return res
  }

  return f(1, N)
}

function getKey (l, r) {
  return `${l},${r}`
}

module.exports = generateTrees
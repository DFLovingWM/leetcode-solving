/**
 * Top-down DP
 * 
 * 时间：`O(N^3)`, 124ms
 */
var allPossibleFBT = function (N) {
  const cache = new Map()

  function helper (n) {
    if (n % 2 === 0) return [] // 偶数不可能
    if (n === 1) return [new TreeNode(0)] // 叶子结点

    if (cache.has(n)) return cache.get(n)

    const res = []
    for (let l = 1; l < n; l += 2) {
      const r = n - 1 - l
      for (const left of helper(l)) {
        for (const right of helper(r)) {
          const root = new TreeNode(0)
          root.left = left
          root.right = right
          res.push(root)
        }
      }
    }
    cache.set(n, res)
    return res
  }

  return helper(N)
};

function TreeNode (val) {
  this.val = val
  this.left = this.right = null
}

module.exports = allPossibleFBT
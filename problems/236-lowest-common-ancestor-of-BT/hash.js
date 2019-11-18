/**
 * 哈希表：建立结点对父结点的映射
 * 
 * 时间：`O(N)`, 96ms
 */
var lowestCommonAncestor = function (root, p, q) {
  const parent = new Map()

  function dfs (node) {
    if (!node) return

    if (node.left) {
      parent.set(node.left, node)
      dfs(node.left)
    }
    if (node.right) {
      parent.set(node.right, node)
      dfs(node.right)
    }
  }

  dfs(root)

  const pp = new Set()
  while (true) {
    pp.add(p)
    if (parent.has(p)) {
      p = parent.get(p)
    } else {
      break
    }
  }

  while (true) {
    if (pp.has(q)) return q
    q = parent.get(q)
  }
};
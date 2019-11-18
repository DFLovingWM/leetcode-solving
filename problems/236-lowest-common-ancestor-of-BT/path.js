/**
 * 求出路径，然后从根结点开始比较、求分叉点
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

  const pp = getPath(parent, p)
  const qq = getPath(parent, q)
  let [i, j] = [pp.length - 1, qq.length - 1]

  while (true) {
    if (i >= 0 && j >= 0 && pp[i] === qq[j]) {
      --i
      --j
    } else {
      break
    }
  }
  return pp[i + 1]
};

function getPath (parent, target) {
  const res = []
  while (true) {
    res.push(target)
    if (parent.has(target)) {
      target = parent.get(target)
    } else {
      break
    }
  }
  return res
}
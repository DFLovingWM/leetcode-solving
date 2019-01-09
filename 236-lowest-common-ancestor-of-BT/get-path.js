/**
 * 分别获取到两个结点的路径(数组)，然后从后面开始找第一个相等的值
 * [100ms]
 * @param {TreeNode} root 根结点
 * @param {TreeNode} p 目标结点1
 * @param {TreeNode} q 目标结点2
 * @returns {TreeNode} 最近共同祖先结点(LCA)
 */
function lowestCommonAncestor (root, p, q)  {
  let path1 = [],
      path2 = []

  dfs(root, p, path1)
  dfs(root, q, path2)

  // console.log('path1: ', path1)
  // console.log('path2: ', path2)

  // 找LCA
  return findLastCommonElement(path1, path2)
}

function dfs (node, targetNode, path = []) {
  if (!node) return false

  path.push(node)

  if (node.val === targetNode.val) {
    return true
  }
  
  if (dfs(node.left, targetNode, path)) return true
  if (dfs(node.right, targetNode, path)) return true

  path.pop() // backtrack
  return false
}

function findLastCommonElement (a, b) {
  for (let i = a.length - 1; i >= 0; --i) {
    for (let j = b.length - 1; j >= 0; --j) {
      if (b[j].val === a[i].val) {
        return b[j]
      }
    }
  }
  return null
}

// module.exports = lowestCommonAncestor
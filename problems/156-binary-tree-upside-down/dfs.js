/**
 * 找到翻转的规律，DFS
 *
 * 时间：`O(H)`, 52ms
 */
var upsideDownBinaryTree = function (root) {
  let res = null // 新的树根

  function dfs (node) {
    if (!node.left && !node.right) {
      res = node
      return node
    }

    const left = dfs(node.left) // 只需要对左子树递归，右子树不需要动
    const right = node.right
    node.left = node.right = null
    // 以left为根
    left.left = right
    left.right = node
    // 但返回原结点，待用
    return node
  }

  if (root) dfs(root)
  return res
};
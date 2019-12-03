/**
 * 后序遍历，推导关系：如果左右子树都是univalue、并且等于根，那么根也是univalue
 * 
 * 时间：`O(N)`, 68ms
 */
var countUnivalSubtrees = function (root) {
  let cnt = 0

  function dfs (node) {
    if (!node) return true

    const leftVal = node.left ? node.left.val : node.val
    const rightVal = node.right ? node.right.val : node.val
    const isLeft = dfs(node.left)
    const isRight = dfs(node.right)
    const res = isLeft && isRight && leftVal === node.val && rightVal === node.val //
    if (res) ++cnt
    return res
  }

  dfs(root)
  return cnt
};
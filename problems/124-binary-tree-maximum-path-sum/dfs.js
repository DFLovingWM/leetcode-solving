/**
 * DFS（后序遍历）
 * 
 * 时间：`O(N)`, 88ms
 */
var maxPathSum = function (root) {
  let res = -Infinity

  /**
   * 后序遍历（路径往上扩展）
   * @param {TreeNode} node 当前结点
   * @returns {number} 以该结点结尾的最大路径和
   */
  function dfs (node) {
    if (!node) return 0
    
    const left = dfs(node.left)
    const right = dfs(node.right)

    res = Math.max(res, node.val + Math.max(0, left) + Math.max(0, right))
    return Math.max(node.val, node.val + left, node.val + right)
  }

  dfs(root)
  return res
};
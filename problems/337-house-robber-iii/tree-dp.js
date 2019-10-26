/**
 * 树形DP
 * 
 * 时间：84ms
 */
var rob = function (root) {
  return Math.max(...dfs(root))
};

/**
 * 递归函数：表示遍历以`node`为根的子树能获得的最大价值
 * @param {TreeNode} node 当前结点
 * @returns {number[]} [不偷，偷]的最大价值
 */
function dfs (node) {
  if (!node) return [0, 0]

  const left = dfs(node.left)
  const right = dfs(node.right)
  return [
    Math.max(...left) + Math.max(...right), // 不偷node：node的左右子树都随意，取max
    node.val + left[0] + right[0] // 偷node：node的左右子树都不能偷
  ]
}
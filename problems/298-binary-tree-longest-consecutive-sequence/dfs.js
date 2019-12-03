/**
 * DFS：从子结点到父结点递减
 * 
 * 时间：`O(N)`, 84ms
 */
var longestConsecutive = function (root) {
  if (!root) return 0

  let res = 1
  
  // 返回以`node`结尾的最长路径
  function dfs (node) {
    if (!node.left && !node.right) return 1

    const left = node.left ? dfs(node.left) : 0
    const right = node.right ? dfs(node.right) : 0

    let curr = 1 // 单独
    if (node.left && node.left.val - 1 === node.val) { // 能连上左边
      curr = Math.max(curr, left + 1)
    }
    if (node.right && node.right.val - 1 === node.val) { // 能连上右边
      curr = Math.max(curr, right + 1)
    }

    res = Math.max(res, curr) // 更新答案
    return curr // 返回给上层
  }

  dfs(root)
  return res
};
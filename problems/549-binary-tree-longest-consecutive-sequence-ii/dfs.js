/**
 * DFS
 * 
 * 时间：`O(N)`, 72ms
 */
var longestConsecutive = function (root) {
  if (!root) return 0

  let res = 1

  // 返回以`node`结尾的最大[递增, 递减]路径长度
  function dfs (node) {
    if (!node.left && !node.right) {
      return [1, 1]
    }
    
    const left = node.left ? dfs(node.left) : []
    const right = node.right ? dfs(node.right) : []

    const curr = [1, 1]
    if (node.left) {
      if (node.val === node.left.val + 1) { // 左边递增
        curr[0] = Math.max(curr[0], left[0] + 1)
      } else if (node.val === node.left.val - 1) { // 左边递减
        curr[1] = Math.max(curr[1], left[1] + 1)
      }
    }
    if (node.right) {
      if (node.val === node.right.val + 1) { // 右边递增
        curr[0] = Math.max(curr[0], right[0] + 1)
      } else if (node.val === node.right.val - 1) { // 右边递减
        curr[1] = Math.max(curr[1], right[1] + 1)
      }
    }

    // 更新答案
    res = Math.max(res, curr[0] + curr[1] - 1)

    return curr
  }

  dfs(root)
  return res
};
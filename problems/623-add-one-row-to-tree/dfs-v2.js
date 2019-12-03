/**
 * DFS：带返回值
 * 
 * 时间：`O(N)`, 80ms
 */
var addOneRow = function (root, v, d) {
  
  function dfs (node, depth, isLeft) {
    // d层时，返回新结点，给父结点来链接
    if (depth === d) {
      const newNode = new TreeNode(v)
      if (isLeft) {
        newNode.left = node
      } else {
        newNode.right = node
      }
      return newNode
    }
    
    if (!node) return node

    // 重新链接
    node.left = dfs(node.left, depth + 1, true)
    node.right = dfs(node.right, depth + 1, false)

    // 返回当前结点
    return node
  }

  return dfs(root, 1, true) // 统一了特殊情况
};
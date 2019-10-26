/**
 * Hash法：求的是存在与否，可以用Set（不必用Map）
 */
var findTarget = function(root, targetSum) {
  const set = new Set()

  // 这里使用DFS。当然，用BFS也行。
  function dfs (node) {
    if (!node) return false

    if (set.has(targetSum - node.val)) {
      return true
    }
    set.add(node.val)
    
    return dfs(node.left) || dfs(node.right)
  }

  return dfs(root)
};

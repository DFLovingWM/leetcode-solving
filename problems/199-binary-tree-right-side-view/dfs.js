/**
 * DFS
 */
function rightSideView (root) {
  const result = []
  dfs(root, result, 0)
  return result
}

function dfs (curr, result, depth) {
  if (!curr) return
  
  // Select the very first(rightmost) node in every depth.
  if (result.length === depth) {
    result.push(curr.val)
  }

  // Firstly visit right child because it may be the target in this depth.
  dfs(curr.right, result, depth + 1)

  // Then left child because it's descendant may be.
  dfs(curr.left, result, depth + 1)
}
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * DFS：每一个递归单位中，判断root、left、right三者的val是否相等
 */
function isUnivalTree (root) {

  function dfs (someRoot) {
    if (someRoot.left) {
      if (someRoot.left.val !== someRoot.val) return false
      if (!dfs(someRoot.left)) return false
    }
    if (someRoot.right) {
      if (someRoot.right.val !== someRoot.val) return false
      if (!dfs(someRoot.right)) return false
    }
    return true
  }

  return dfs(root)
}
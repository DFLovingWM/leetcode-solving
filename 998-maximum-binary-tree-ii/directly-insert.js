/**
 * Algorithm/Rule (which can be easily found in the examples): 
 * 1. [A] goes right until meeting a smaller number [B].
 * 2. [A] replaces [B], and then [B] becomes [A]'s left child.
 * 
 * - Time: O(logN), 68ms
 * - Space: O(logN), 34.7MB
 */
function insertIntoMaxTree (root, newVal) {
  if (!root || newVal > root.val) {
    let newNode = new TreeNode(newVal)
    newNode.left = root
    return newNode
  }

  root.right = insertIntoMaxTree(root.right, newVal)
  return root
}
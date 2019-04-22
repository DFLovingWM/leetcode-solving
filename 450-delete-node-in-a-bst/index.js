/**
 * Recursive unit:
 * deleting a node, and use the next greater node to replace it.
 * 
 * Refers to: https://leetcode.com/problems/delete-node-in-a-bst/discuss/93296/Recursive-Easy-to-Understand-Java-Solution
 */
var deleteNode = function(root, key) {
  if (!root) return root

  if (key < root.val) {
    root.left = deleteNode(root.left, key)
  } else if (key > root.val) {
    root.right = deleteNode(root.right, key)
  } else {
    if (!root.left) { // If the node to delete has no left child, let its right child go up.
      return root.right
    } else if (!root.right) { // Vice versa.
      return root.left
    }

    // Find the next greater to replace the deleted.
    let rightMin = root.right
    while (rightMin.left) {
      rightMin = rightMin.left
    }
    root.val = rightMin.val
    root.right = deleteNode(root.right, root.val)
  }

  return root
};
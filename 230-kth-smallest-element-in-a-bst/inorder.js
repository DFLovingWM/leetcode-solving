let result
let counter

/**
 * Inorder traversal, with a counter.
 * [92ms]
 * Time complexity: O(N)
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
function kthSmallest (root, k) {
  result = null
  counter = 0

  inorder(root, k, 0)

  return result
}

function inorder (node, k) {
  if (!node || counter >= k) return

  // Left child.
  inorder(node.left, k, counter)

  // Visit the current node.
  ++counter
  if (k === counter) { // Target found.
    result = node.val
  }

  // Right child.
  inorder(node.right, k, counter)
}

module.exports = kthSmallest
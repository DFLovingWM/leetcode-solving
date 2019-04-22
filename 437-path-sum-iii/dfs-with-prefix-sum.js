/**
 * Prefix sum on binary tree.
 * 
 * Time: 84ms
 * Space: 18.5MB
 * 
 * Hint: https://leetcode.com/problems/path-sum-iii/discuss/91878/17-ms-on-java-prefix-sum-method
 */

let count

function pathSum (root, target) {
  count = 0
  preOrder(root, target, 0, new Map([[0, 1]]))
  return count
}

function preOrder (node, target, sum, prefix) {
  if (!node) return

  // Subroot
  sum += node.val
  if (prefix.has(sum - target)) {
    count += prefix.get(sum - target)
  }
  prefix.set(sum, (prefix.get(sum) || 0) + 1)

  // Left child
  preOrder(node.left, target, sum, prefix)

  // Right child
  preOrder(node.right, target, sum, prefix)

  // Backtrack
  prefix.set(sum, prefix.get(sum) - 1)
}

module.exports = pathSum
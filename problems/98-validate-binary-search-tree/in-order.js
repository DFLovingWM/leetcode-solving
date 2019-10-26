let prev, curr

/**
 * 中序遍历，检查前后结点是否严格有序
 * 时间：O(N), 68ms
 * 空间：O(H), 37.4MB
 */
var isValidBST = function(root) {
  prev = curr = null
  return inOrder(root)
};

function inOrder (node) {
  if (!node) return true

  if (!inOrder(node.left)) return false
  
  prev = curr
  curr = node
  if (prev && curr && prev.val >= curr.val) return false

  if (!inOrder(node.right)) return false

  return true
}

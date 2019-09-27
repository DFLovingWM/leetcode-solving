let k, res

/**
 * 中序遍历，第K次
 * 时间：O(K), 64ms
 */
var kthSmallest = function(root, K) {
  k = 0
  res = null
  inOrder(root, K)
  return res
};

function inOrder (node, K) {
  if (!node) return false
  
  if (inOrder(node.left, K)) return true

  ++k
  if (k === K) {
    res = node.val
    return true
  }

  if (inOrder(node.right, K)) return true

  return false
}

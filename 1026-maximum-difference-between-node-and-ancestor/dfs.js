let result

/**
 * Top-down DFS
 */
var maxAncestorDiff = function(root) {
  result = 0
  helper(root.left, root.val, root.val)
  helper(root.right, root.val, root.val)
  return result
};

/**
 * 对于每一个结点而言，记录当前的`min`和`max`，相减的绝对值就是`maxDiff`
 * @param {TreeNode} node 当前结点
 * @param {number} min 目前最小值
 * @param {number} max 目前最大值
 */
function helper (node, min, max) {
  if (!node) return

  min = Math.min(min, node.val)
  max = Math.max(max, node.val)
  
  result = Math.max(result, Math.abs(min - max))

  helper(node.left, min, max)
  helper(node.right, min, max)
}

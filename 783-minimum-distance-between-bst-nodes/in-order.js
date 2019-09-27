let prev, curr
let minDiff

/**
 * 中序遍历，比较所有的相邻差
 * 
 * 时间：O(N)，76ms
 */
var minDiffInBST = function(root) {
  prev = curr = null
  minDiff = Infinity
  inOrder(root)
  return minDiff
};

function inOrder (node) {
  if (!node) return

  inOrder(node.left)

  prev = curr
  curr = node
  if (prev && curr) minDiff = Math.min(minDiff, curr.val - prev.val)

  inOrder(node.right)
}

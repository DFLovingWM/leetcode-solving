/**
 * 前序遍历树，根据需要反转
 */
var flipMatchVoyage = function(root, voyage) {
  let i = 0
  let terminal = false
  let flips = []

  function preOrder (node) {
    if (!node) return

    if (node.val !== voyage[i]) {
      terminal = true
      flips = [-1]
      return
    }

    ++i
    if (node.left && node.left.val !== voyage[i]) { // 需要反转
      flips.push(node.val);
      [node.left, node.right] = [node.right, node.left]
    }
    
    preOrder(node.left)
    if (!terminal) preOrder(node.right)
  }

  preOrder(root)
  return flips
};

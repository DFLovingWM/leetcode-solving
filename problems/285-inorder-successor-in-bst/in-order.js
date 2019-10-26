let prev // 上一个结点
let curr // 当前结点

/**
 * 中序遍历
 * 时间：O(N), 100ms
 */
var inorderSuccessor = function(root, target) {
  prev = curr = null
  if (inOrder(root, target)) {
    return curr
  } else {
    return null
  }
};

// 返回true表示已经找到，不必继续遍历
function inOrder (node, target) {
  if (!node) return false

  if (inOrder(node.left, target)) return true

  prev = curr
  curr = node
  if (prev && prev.val === target.val) { // 找到了
    return true
  }
  
  if (inOrder(node.right, target)) return true

  return false
};

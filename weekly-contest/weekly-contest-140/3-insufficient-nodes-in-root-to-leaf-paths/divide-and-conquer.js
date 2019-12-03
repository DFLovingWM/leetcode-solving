/**
 * 分治
 * 
 * 时间：100ms
 */
var sufficientSubset = function (node, limit) {
  let left = false
  if (node.left) {
    left = true
    node.left = sufficientSubset(node.left, limit - node.val)
  }

  let right = false
  if (node.right) {
    right = true
    node.right = sufficientSubset(node.right, limit - node.val)
  }

  if (!left && !right) { // 叶子结点
    if (node.val < limit) return null // 和不够时，删除叶子结点
  } else { // 非叶子结点
    if (left && right) {
      if (!node.left && !node.right) return null // 左右结点都被删除时，即该点的所有路径都不合法 => 该点也需要删除
    } else if (left) {
      if (!node.left) return null // 同理
    } else {
      if (!node.right) return null // 同理
    }
  }

  return node
};

module.exports = sufficientSubset
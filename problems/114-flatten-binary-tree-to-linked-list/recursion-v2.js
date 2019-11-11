/**
 * 递归法（类似于后序遍历）
 */
function flatten (root) {
  if (!root) return

  const [left, right] = [root.left, root.right]
  flatten(left)
  flatten(right)
  root.left = null
  root.right = left
  while (root.right) root = root.right
  root.right = right
}

module.exports = flatten
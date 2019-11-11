/**
 * 前序 + 重新串联
 */
var flatten = function (root) {
  const dummy = new TreeNode()
  let p = dummy

  function preOrder (node) {
    if (!node) return

    p.right = node
    p = p.right

    const [left, right] = [node.left, node.right] // 提前取出指向，以免被删除后无法获取
    node.left = node.right = null // 串联后，要将尾结点重置。即删除指向
    preOrder(left)
    preOrder(right)
  }

  preOrder(root)
  return dummy.right
};
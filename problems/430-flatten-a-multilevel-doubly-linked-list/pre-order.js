/**
 * 相当于二叉树的前序遍历
 */
var flatten = function (head) {
  const dummy = new Node()
  let prev = dummy

  function preOrder (node) {
    if (!node) return

    prev.next = node
    const [left, right] = [node.child, node.next] // 相当于左右子树
    node.child = node.next = null
    node.prev = prev
    prev = node

    preOrder(left)
    preOrder(right)
  }

  preOrder(head)

  // 注意：最后需要删除首结点对dummy结点的指向
  const res = dummy.next
  if (res) res.prev = null

  return res
};

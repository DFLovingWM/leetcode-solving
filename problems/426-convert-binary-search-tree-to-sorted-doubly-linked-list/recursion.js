let prev, curr
let head

/**
 * 前后双指针 + 中序遍历
 * 
 * 时间：748ms
 */
var treeToDoublyList = function(root) {
  if (!root) return null

  prev = curr = null
  head = null

  inOrder(root)

  // 现在curr指向尾结点
  curr.right = head
  head.left = curr

  return head
};

function inOrder (node) {
  if (!node) return null

  inOrder(node.left)

  prev = curr
  curr = node
  if (prev && curr) {
    prev.right = curr
    curr.left = prev
  }
  if (!prev) head = curr

  inOrder(node.right)
}
/**
 * 递归法：后序遍历
 * 
 * 时间：O(N)
 * 空间：O(N)
 */
function reverseList (head) {
  let res = null

  function helper (node) {
    if (!node.next) {
      res = node // 尾结点变成头结点，待返回
      return node
    }

    const next = helper(node.next)
    node.next = next.next
    next.next = node
    return node
  }

  if (head) helper(head)
  return res
}

module.exports = reverseList
/**
 * 递归法：前序遍历
 * 
 * 时间：O(N)
 * 空间：O(N)
 */
let res

function reverseList (head) {
  res = null
  preOrder(null, head)
  return res
}

function preOrder (prev, curr) {
  if (!curr) return

  const next = curr.next
  curr.next = prev
  res = curr
  preOrder(curr, next)
}

module.exports = reverseList
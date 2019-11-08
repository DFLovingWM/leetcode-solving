/**
 * 递归：还是后序
 */
function reverseList (head) {
  if (!head || !head.next) return head
  
  const tail = reverseList(head.next)
  head.next.next = head
  head.next = null
  return tail
}

module.exports = reverseList
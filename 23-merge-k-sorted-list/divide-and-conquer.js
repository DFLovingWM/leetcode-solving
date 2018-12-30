function mergeKLists (lists) {
  if (lists.length === 0) return null
  if (lists.length === 1) return lists[0]

  // to be continued
}

/**
 * 合并两个链表
 * @param {ListNode} first 链表1
 * @param {ListNode} second 链表2
 * @returns {ListNode} 新链表
 */
function mergeTwoLists (first, second) {
  const dummy = new ListNode(-1)
  let p = dummy

  while (first && second) {
    let last
    if (first.val < second.val) {
      last = first
      first = first.next
    } else {
      last = second
      second = second.next
    }
    last.next = null
    p.next = last
    p = p.next
  }
  if (first) {
    p.next = first
  } else {
    p.next = second
  }

  return dummy.next
}
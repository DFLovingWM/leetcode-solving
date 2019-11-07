/**
 * 迭代：构建两个链表
 * 
 * 时间：O(N), 72ms
 * 空间：O(1)
 */
var partition = function (head, pivot) {
  const lDummy = new ListNode() // 小于pivot
  let l = lDummy
  const geDummy = new ListNode() // 大于等于pivot
  let ge = geDummy

  for (; head; head = head.next) {
    if (head.val < pivot) {
      l.next = head
      l = l.next
    } else {
      ge.next = head
      ge = ge.next
    }
  }

  // 小的在前面
  ge.next = null // 尾结点连接到空（防止之后产生环）
  l.next = geDummy.next

  return lDummy.next
};

function ListNode (val) {
  this.val = val
  this.next = null
}

module.exports = partition
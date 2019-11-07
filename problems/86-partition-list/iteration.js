/**
 * 迭代：维护小于pivot的“区间”
 * 
 * 时间：O(N), 64ms
 * 空间：O(1)
 */
var partition = function (head, pivot) {
  const dummy = new ListNode('dummy')
  dummy.next = head
  let tail = dummy // 小于3的区间尾元素

  let prev = dummy
  let curr = prev.next

  while (curr) {
    const next = curr.next

    if (curr.val < pivot) { // 小于pivot，则将结点移动到前面
      if (tail.next === curr) { // 本来就在该位置，不必移动
        tail = tail.next;
        prev = curr
      } else {
        prev.next = curr.next
        curr.next = tail.next
        tail.next = curr
        tail = tail.next
      }
    } else {
      prev = curr
    }

    curr = next
  }

  return dummy.next
};

function ListNode (val) {
  this.val = val
  this.next = null
}

module.exports = partition
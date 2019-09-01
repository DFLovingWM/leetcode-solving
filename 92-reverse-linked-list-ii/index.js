/**
 * 循环法（基于206）：
 * 链表表示为：A[B ~ C]D：
 * 1. 反转目标范围，得到[C ~ B]D
 * 2. （此时A指向B，）调整A指向，注意A可能为空
 */
var reverseBetween = function(head, from, to) {
  if (from === to) return head

  --from
  --to

  let pre = null // pre表示反转范围之前的结点
  let subHead, subTail
  let count = 0, p = head
  while (count < from) {
    [count, pre, p] = [count + 1, p, p.next]
  }
  subHead = p
  while (count < to) {
    [count, p] = [count + 1, p.next]
  }
  subTail = p

  const newSubHead = reverse(subHead, subTail.next)
  if (!pre) { // 原头部参与反转
    return newSubHead
  } else { // 原头部未参与反转
    pre.next = newSubHead // 连接
    return head
  }
};

function reverse (head, end) {
  let tail = head
  while (tail && tail.next !== end) {
    let newNode = tail.next
    tail.next = newNode.next
    newNode.next = head

    head = newNode
  }
  return head
}

// 测试代码
// const LinkedList = require('../utils/linked-list/index.js')
// const { ListNode } = LinkedList
// let head = LinkedList.from([1,2,3,4,5])
// head = reverseBetween(head, 2, 4)
// LinkedList.print(head)

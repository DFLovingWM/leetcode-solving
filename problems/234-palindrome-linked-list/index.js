/**
 * 强行将空间压缩到O(1)的一种思路：
 * （暂时破坏）
 * 0. 分两段：A、B
 * 1. 反转A
 * 2. 逐一比较A、B
 * （恢复）
 * 3. 再反转A
 * 4. 将A、B连接起来
 * 
 * 争议：https://leetcode.com/problems/palindrome-linked-list/discuss/64493/Reversing-a-list-is-not-considered-%22O(1)-space%22
 */
function isPalindrome (head) {
  const length = getLength(head)

  if (length === 0 || length === 1) { // 简单情况，直接告诉答案
    return true
  }

  let aTail, aTailNext, bHead
  let p = head
  if (length & 1) { // 奇
    let step = Math.floor(length / 2) - 1
    while (step--) p = p.next
    aTail = p
    aTailNext = aTail.next
    bHead = p.next.next
  } else { // 偶
    let step = length / 2 - 1
    while (step--) p = p.next
    aTail = p
    aTailNext = aTail.next
    bHead = p.next
  }

  aTail.next = null // 0
  head = reverse(head) // 1
  const result = isSame(head, bHead) // 2
  head = reverse(head) // 3
  aTail.next = aTailNext // 4

  return result
}

// 获取链表长度
function getLength (head) {
  let ret = 0
  while (head) {
    ++ret
    head = head.next
  }
  return ret
}

// 反转链表
function reverse (head) {
  let tail = head
  while (tail && tail.next) {
    let newNode = tail.next
    tail.next = newNode.next
    newNode.next = head
    // 更新head
    head = newNode
  }
  return head
}

// 判断两个链表是否满足值相等
function isSame (a, b) {
  while (a) {
    if (a.val !== b.val) return false
    a = a.next
    b = b.next
  }
  return true
}

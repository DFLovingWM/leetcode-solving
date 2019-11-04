/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * 调整起点，使它们共同到达交点处
 */
var getIntersectionNode = function(headA, headB) {
  // 调整起点，使两个链表头到尾部的距离相等
  let [lenA, lenB] = [0, 0]
  for (let p = headA; p; p = p.next) ++lenA
  for (let p = headB; p; p = p.next) ++lenB
  if (lenA > lenB) {
    for (let i = lenA - lenB; i > 0; --i) headA = headA.next
  } else {
    for (let i = lenB - lenA; i > 0; --i) headB = headB.next
  }
  
  // 共同前进，相遇则检查
  while (headA) {
    if (headA === headB) return headA
    headA = headA.next
    headB = headB.next
  }
};
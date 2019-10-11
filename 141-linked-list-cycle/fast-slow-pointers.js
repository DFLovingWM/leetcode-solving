/**
 * 快慢指针：快指针是满指针的2倍，有环会相遇
 * 
 * 时间：88ms
 */
var hasCycle = function (head) {
  if (!head) return false

  let [slow, fast] = [head, head.next]

  while (slow !== fast) {
    if (!slow || !fast) { // 走到了尽头，说明不可能有环
      return false
    }

    // fast每次走2步
    if (fast) fast = fast.next
    if (fast) fast = fast.next

    // slow每次走1步
    if (slow) slow = slow.next
  }

  return true // 来到这里，说明slow===fast且不为空，有环
};
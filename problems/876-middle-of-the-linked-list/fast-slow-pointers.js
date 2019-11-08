/**
 * 快慢指针
 */
var middleNode = function (head) {
  let [slow, fast] = [head, head]
  while (fast && fast.next) {
    fast = fast.next.next
    slow = slow.next
  }
  return slow
};
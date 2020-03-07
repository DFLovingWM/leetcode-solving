/**
 * 双指针
 * 
 * 时间：O(N), 72ms
 * 空间：O(1), 34.2MB
 */
var getKthFromEnd = function (head, k) {
  --k;

  // 快指针移动
  let fast = head;
  for (let i = 0; i < k; ++i) {
    fast = fast.next;
    if (!fast) return fast;
  }

  let slow = head;
  while (fast.next) {
    // 同时移动
    fast = fast.next;
    slow = slow.next;
  }

  return slow;
};
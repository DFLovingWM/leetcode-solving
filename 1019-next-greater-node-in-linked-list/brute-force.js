/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * O(N2)解法，也能过。。。但是没啥意义
 */
var nextLargerNodes = function(head) {
  let ret = []
  while (head) {
    let cur = head.val, greater = 0
    let p = head
    while (p.next) {
      p = p.next
      if (p.val > cur) {
        greater = p.val
        break
      }
    }
    ret.push(greater)
    head = head.next
  }
  return ret
};
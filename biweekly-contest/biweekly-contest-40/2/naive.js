/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @param {ListNode} list1
 * @param {number} a
 * @param {number} b
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeInBetween = function(list1, a, b, list2) {
  let p = list1;
  for (let i = a - 2; i >= 0; --i) {
    p = p.next;
  }

  let r = list1;
  for (let i = b; i >= 0; --i) {
    r = r.next;
  }

  let q = list2;
  while (q.next) {
    q = q.next;
  }

  p.next = list2;
  q.next = r;
  return list1;
};

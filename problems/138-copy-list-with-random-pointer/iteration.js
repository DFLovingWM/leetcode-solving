/**
 * // Definition for a Node.
 * function Node(val,next,random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * 迭代法
 * 时间：732ms
 */
var copyRandomList = function (head) {
  const dummy = new Node('dummy', null, null)
  let p = dummy
  let q = head
  const mapping = new Map([[null, null]]) // 记录结点的映射关系

  // 处理next
  while (q) {
    p.next = new Node(q.val)
    mapping.set(q, p.next)
    p = p.next
    q = q.next
  }

  // 处理random
  p = dummy.next
  q = head
  while (q) {
    p.random = mapping.get(q.random)
    q = q.next
    p = p.next
  }

  return dummy.next
};
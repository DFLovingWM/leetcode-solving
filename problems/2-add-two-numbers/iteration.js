/**
 * 迭代
 * 
 * 时间：O(N), 136ms
 */
var addTwoNumbers = function (l1, l2) {
  const dummy = new ListNode()
  let p = dummy
  let carry = 0

  // 逐位计算
  for (; l1 && l2; l1 = l1.next, l2 = l2.next) {
    const tmp = carry + l1.val + l2.val
    p.next = new ListNode(tmp % 10)
    p = p.next
    carry = Math.floor(tmp / 10)
  }
  // 剩余
  let l = l1 || l2
  for (; l; l = l.next) {
    const tmp = carry + l.val
    p.next = new ListNode(tmp % 10)
    p = p.next
    carry = Math.floor(tmp / 10)
  }
  // 最后进位
  if (carry) p.next = new ListNode(carry)

  return dummy.next
};

function ListNode (val) {
  this.val = val
  this.next = null
}

module.exports = addTwoNumbers
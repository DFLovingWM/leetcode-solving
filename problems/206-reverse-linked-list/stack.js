/**
 * stack解法
 */
var reverseList = function (head) {
  const stack = []
  for (let p = head; p; p = p.next) {
    stack.push(p)
  }

  const dummy = new ListNode()
  let p = dummy
  while (stack.length > 0) {
    p.next = stack.pop()
    p = p.next
  }
  p.next = null
  return dummy.next
};

function ListNode (val) {
  this.val = val
  this.next = null
}

module.exports = reverseList
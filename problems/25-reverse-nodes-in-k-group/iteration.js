/**
 * 循环
 */
var reverseKGroup = function (head, K) {
  let n = 0, p = head
  while (p) {
    p = p.next
    ++n
  }

  let res = head
  let left = null
  let right = new ListNode()
  right.next = head
  let prevLeft = null, prevRight = null

  for (let i = 0, limit = Math.floor(n / K); i < limit; ++i) {
    [prevLeft, prevRight, left, right] = [left, right, right.next, right.next]
    for (let j = 2; j <= K; ++j) {
      const newNode = right.next
      right.next = newNode.next
      newNode.next = left
      left = newNode
    }
    if (i === 0) {
      res = left
    }
    prevRight.next = left
  }

  return res
};

function ListNode (val) {
  this.val = val
  this.next = null
}

module.exports = reverseKGroup
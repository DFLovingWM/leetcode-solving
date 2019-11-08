/**
 * 迭代 + 比较
 */
var deleteDuplicates = function (head) {
  const dummy = new ListNode()
  dummy.next = head
  let p = dummy
  let [prev, curr] = [null, head]

  while (curr) {
    if (!prev || prev.val !== curr.val) {
      p.next = curr
      p = p.next
    }
    [prev, curr] = [curr, curr.next]
  }

  p.next = null
  return dummy.next
};

function ListNode (val) {
  this.val = val
  this.next = null
}

module.exports = deleteDuplicates
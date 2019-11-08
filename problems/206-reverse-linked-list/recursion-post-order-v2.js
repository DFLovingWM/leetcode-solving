/**
 * 递归
 */
var reverseList = function (head) {
  const dummy = new ListNode()
  let p = dummy

  function postOrder (node) {
    if (!node) return

    postOrder(node.next)
    p.next = node
    p = p.next
  }

  postOrder(head)
  p.next = null
  return dummy.next
};

function ListNode (val) {
  this.val = val
  this.next = null
}

module.exports = reverseList
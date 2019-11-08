/**
 * 递归
 */
var plusOne = function (head) {
  const carry = helper(head)
  if (carry) {
    const dummy = new ListNode(carry)
    dummy.next = head
    head = dummy
  }
  return head
};

/**
 * 递归函数
 * @param {ListNode} head 当前结点
 * @returns {number} 进位
 */
function helper (head) {
  if (!head) return 1

  const carry = helper(head.next)
  const tmp = carry + head.val
  head.val = tmp % 10
  return Math.floor(tmp / 10)
}
/**
 * 递归：将每K个结点切出来进行反转
 */
var reverseKGroup = function (head, K) {
  let [prev, curr] = [null, head]
  let i
  for (i = 0; i < K && curr; ++i) {
    [prev, curr] = [curr, curr.next]
  }
  if (i < K) return head // 不够K个，不需要反转

  // 先把这K个从链表中切出来
  prev.next = null
  // 再对这K个反转
  const [newHead, newTail] = reverseList(head)

  // 递归
  newTail.next = reverseKGroup(curr, K)

  return newHead
};

/**
 * 反转整个链表
 * @param {ListNode} head 链表头结点
 * @returns {ListNode[]} 反转后链表的头结点与尾结点
 */
function reverseList (head) {
  let resHead = null
  let resTail = null

  function dfs (head) {
    if (!head.next) { // 尾结点
      resHead = head
      return head
    }
    const next = dfs(head.next)
    next.next = head
    return head
  }

  if (head) {
    resTail = dfs(head)
  }

  return [resHead, resTail]
}

module.exports = reverseKGroup
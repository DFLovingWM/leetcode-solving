/**
 * 递归法思路：
 * 类比二叉树中的后序遍历；每个递归单元返回逆序链表的尾结点。
 * 逆序处理。
 * 
 * - 时间：O(N)
 * - 空间：O(N)
 */
function reverseList (head) {
  if (!head || !head.next) {
    return head
  }

  let right = reverseList(head.next)
  head.next = right.next
  right.next = head
  return head
}

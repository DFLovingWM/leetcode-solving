/**
 * 后序遍历：涉及到删除结点，所以有返回值
 * 
 * 时间：O(N), 80ms
 * 空间：O(N), 35.7MB
 */
var deleteNode = function (head, val) {
  if (!head) return head;

  head.next = deleteNode(head.next, val);
  if (head.val === val) return head.next; // 删除本结点
  return head; // 保留本结点
};
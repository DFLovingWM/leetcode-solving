/**
 * 重新串联
 */
var deleteNode = function (head, val) {
  const dummy = new TreeNode();
  dummy.next = head;
  let p = dummy;
  while (head) {
    if (head.val !== val) { // 只串联非val的结点
      const next = head.next;
      head.next = null; // 断开
      p.next = head;
      p = p.next;
      head = next;
    } else {
      head = head.next;
    }
  }
  return dummy.next;
};
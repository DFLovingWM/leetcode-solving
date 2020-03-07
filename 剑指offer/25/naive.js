/**
 * 合并两个有序链表
 * 
 * 时间：O(L1 + L2), 96ms
 * 空间：O(L1 + L2), 38MB
 */
var mergeTwoLists = function (l1, l2) {
  const dummy = new TreeNode();
  dummy.next = null;
  let p = dummy;

  while (l1 && l2) {
    const l = l1.val < l2.val ? l1 : l2;
    if (l1.val < l2.val) {
      const next = l1.next;
      l1.next = null; // 清空
      p.next = l1; // 串联
      p = p.next;
      l1 = next; // l1递进
    } else {
      const next = l2.next;
      l2.next = null;
      p.next = l2;
      p = p.next;
      l2 = next;
    }
  }
  if (l1) {
    p.next = l1;
  } else if (l2) {
    p.next = l2;
  }

  return dummy.next;
};
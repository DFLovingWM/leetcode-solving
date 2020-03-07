/**
 * 后序遍历，重新串联（无返回值）
 * 
 * 时间：O(N)
 * 空间：O(N)
 */
var reverseList = function (head) {
  const dummy = new TreeNode(); // 需要记录新链表头
  dummy.next = null;
  let p = dummy;

  function dfs(node) {
    if (!node) return;
    
    dfs(node.next);
    // 清理
    node.next = null;
    // 串联
    p.next = node;
    p = p.next
  }

  dfs(head);
  return dummy.next;
};
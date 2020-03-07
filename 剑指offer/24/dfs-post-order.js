/**
 * 后序遍历（有返回值）
 * 
 * 时间：O(N)
 * 空间：O(N)
 */
var reverseList = function (head) {
  const dummy = new TreeNode(); // 需要记录新链表头
  dummy.next = null;

  function dfs(node) {
    if (!node) return dummy;

    const next = dfs(node.next);
    next.next = node; // 反连接
    node.next = null; // 清理
    return node;
  }

  dfs(head);
  return dummy.next;
};
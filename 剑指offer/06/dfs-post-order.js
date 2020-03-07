/**
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * DFS（后序遍历）
 */
var reversePrint = function (head) {
  const res = [];

  function dfs(head) {
    if (!head) return;

    dfs(head.next);
    res.push(head.val);
  }

  dfs(head);
  return res;
};
/**
 * 中序遍历
 * 
 * 时间：O(N), 72ms
 * 空间：O(N), 35.9MB
 */
var treeToDoublyList = function (root) {
  if (!root) return null;

  const dummy = new Node(null, null, null);
  let p = dummy;
  
  // 中序遍历
  function inOrder(node) {
    if (!node) return;
    // 左
    inOrder(node.left);
    // 本结点
    const right = node.right;
    node.right = null;
    node.left = p;
    p.right = node;
    p = node;
    // 右
    inOrder(right);
  }

  inOrder(root);
  // 将头尾连接
  const head = dummy.right;
  p.right = head;
  head.left = p;

  return head;
};
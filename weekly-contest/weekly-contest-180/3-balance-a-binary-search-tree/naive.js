/**
 * 重新安排，中位数作为subRoot
 */
var balanceBST = function(root) {
  const vals = inOrder(root);

  function build(left, right) {
    if (left >= right) {
      return null;
    }
    const mid = left + (right - left >>> 1); // 中位数
    const root = new TreeNode(vals[mid]);
    root.left = build(left, mid);
    root.right = build(mid + 1, right);
    return root;
  }

  return build(0, vals.length);
};

function inOrder(node) {
  if (!node) {
    return [];
  }
  return [...inOrder(node.left), node.val, ...inOrder(node.right)];
}
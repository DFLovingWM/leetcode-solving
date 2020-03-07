/**
 * 后序遍历
 */
var mirrorTree = function (root) {
  if (!root) return root;

  // 先递归子树
  root.left = mirrorTree(root.left);
  root.right = mirrorTree(root.right);
  // 再反转本结点
  [root.left, root.right] = [root.right, root.left];
  return root;
};
/**
 * 前序遍历
 */
var mirrorTree = function (root) {
  if (!root) return root;

  // 先反转本结点  
  [root.left, root.right] = [root.right, root.left];
  // 再递归子树
  root.left = mirrorTree(root.left);
  root.right = mirrorTree(root.right);

  return root;
};
/**
 * 递归
 */
var trimBST = function (node, L, R) {
  if (node.left) {
    node.left = trimBST(node.left, L, R)
  }
  if (node.right) {
    node.right = trimBST(node.right, L, R)
  }

  if (node.val >= L && node.val <= R) {
    return node
  } else {
    return node.left || node.right
  }
};

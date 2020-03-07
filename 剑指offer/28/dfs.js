/**
 * DFS
 * 
 * 时间：O(N), 68ms
 * 空间：O(H), 35.7MB
 */
var isSymmetric = function (root) {
  if (!root) return true;
  return isSym(root.left, root.right);
};

function isSym(A, B) {
  if (!A && !B) return true;
  if (!A || !B) return false;
  return A.val === B.val && isSym(A.left, B.right) && isSym(A.right, B.left);
}
/**
 * 暴力递归判断（类比字符串暴力比较）
 * 
 * 时间：O(N^2), 100ms
 * 空间：O(H), 47.6MB
 */
function isSubStructure(A, B) {
  if (!B) return false; // 约定：空树不是任何树的子树
  if (!A) return false; // 那么也不可能是母树
  return contain(A, B) || isSubStructure(A.left, B) || isSubStructure(A.right, B);
}

// 判断
function contain(A, B) {
  if (!B) return true;
  if (!A) return false;
  return A.val === B.val && contain(A.left, B.left) && contain(A.right, B.right);
}
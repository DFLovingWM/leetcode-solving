/**
 * 暴力
 * 
 * 时间：O(N^2)
 */
var findDuplicateSubtrees = function(root) {
  // 收集所有子树
  const subTrees = [];
  (function getAll(node) {
    if (!node) return;
    subTrees.push(node);
    getAll(node.left);
    getAll(node.right);
  })(root);

  // 哈希（结构相同的放在一个bucket）
  const tree = new Map();
  for (let i = 0; i < subTrees.length; ++i) {
    
  }

  return freq.;
};

// 比较两个子树，是否类似
// O(N)
function isLike(A, B) {
  if (!A && !B) return true;
  if (!A || !B) return false;
  return A.val === B.val &&
    isLike(A.left, B.left) && isLike(A.right, B.right);
}

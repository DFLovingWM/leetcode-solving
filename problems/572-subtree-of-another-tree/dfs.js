/**
 * DFS：暴力匹配
 * 
 * 时间：`O(NM)`, 92ms
 */
var isSubtree = function (root, pattern) {
  if (!root) return !pattern
  return isSame(root, pattern) || // 当前结点与pattern比较
    isSubtree(root.left, pattern) || isSubtree(root.right, pattern) // 如果不行，看看子结点如何(递归)
};

// 判断两个树是否全等
function isSame (A, B) {
  if (!A && !B) return true
  if (!A || !B) return false
  return A.val === B.val && isSame(A.left, B.left) && isSame(A.right, B.right)
}
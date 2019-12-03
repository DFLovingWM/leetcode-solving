/**
 * DFS建树
 * 
 * 时间：`O(N)`, 104ms
 */
var mergeTrees = function (t1, t2) {
  if (!t1) return t2
  if (!t2) return t1

  // 以下是t1、t2都不为空的情况
  // 只处理当前结点，往下结点可以分治
  const newNode = new TreeNode()
  newNode.val = t1.val + t2.val
  newNode.left = mergeTrees(t1.left, t2.left)
  newNode.right = mergeTrees(t1.right, t2.right)
  return newNode
};
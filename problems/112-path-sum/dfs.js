/**
 * 基本的树DFS。注意需要区分“叶子”结点和“NULL”结点
 * 
 * 时间：72ms
 */
function hasPathSum (node, sum) {
  if (!node) return false // NULL结点
  
  if (!node.left && !node.right) return node.val === sum // 叶子结点
  
  return hasPathSum(node.left, sum - node.val) || hasPathSum(node.right, sum - node.val)
}

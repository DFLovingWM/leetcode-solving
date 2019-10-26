/**
 * 递归法
 * 时间：724ms
 * 空间：82.2MB
 */
var preorder = function(node) {
  if (!node) return []
  
  return [
    node.val,
    ...node.children.reduce((acc, child) => acc.concat(preorder(child)), [])
  ]
};
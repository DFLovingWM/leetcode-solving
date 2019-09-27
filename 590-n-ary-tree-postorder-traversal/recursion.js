/**
 * 递归法
 * 时间：748ms
 * 空间：82.2MB
 */
var postorder = function(node) {
  if (!node) return []
  
  return [
    ...node.children.reduce((acc, child) => acc.concat(postorder(child)), []),
    node.val
  ]
};
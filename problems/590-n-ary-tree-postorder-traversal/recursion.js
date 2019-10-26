/**
 * 递归法
 * 
 * 时间：748ms
 */
var postorder = function(node) {
  if (!node) return []
  
  return [
    ...node.children.reduce((acc, child) => acc.concat(postorder(child)), []),
    node.val
  ]
};
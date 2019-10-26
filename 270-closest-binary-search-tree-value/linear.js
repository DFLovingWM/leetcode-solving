/**
 * 全部结点都遍历，然后比较
 * 
 * 时间：O(N), 76ms
 */
var closestValue = function (root, target) {
  let res = root.val

  function dfs (node) {
    if (!node) return

    if (Math.abs(node.val - target) < Math.abs(res - target)) {
      res = node.val
    }
    dfs(node.left)
    dfs(node.right)
  }
  
  dfs(root)
  return res
};
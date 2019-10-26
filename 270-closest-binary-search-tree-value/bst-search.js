/**
 * 二分遍历，然后比较
 * 
 * 时间：O(logN), 80ms
 */
var closestValue = function (root, target) {
  let res = root.val

  function dfs (node) {
    if (!node) return

    if (Math.abs(node.val - target) < Math.abs(res - target)) {
      res = node.val
    }
    if (node.val > target) {
      dfs(node.left)
    } else {
      dfs(node.right)
    }
  }
  
  dfs(root)
  return res
};

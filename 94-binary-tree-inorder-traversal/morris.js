/**
 * Morris遍历：左子树的最右结点.right = 本结点
 * 时间：O(N), 72ms
 * 空间：O(1), 34.5MB
 */
var inorderTraversal = function(root) {
  const res = []
  if (!root) return res
  
  while (root) {
    if (root.left) { // 如果存在左结点
      let rightmost = root.left
      while (rightmost.right) {
        rightmost = rightmost.right
      }
      rightmost.right = root;
      [root.left, root] = [null, root.left]
    } else { // 如果不存在左结点
      // 遍历该结点
      res.push(root.val)

      // 然后往右走（right肯定不为null）
      root = root.right
    }
  }

  return res
};

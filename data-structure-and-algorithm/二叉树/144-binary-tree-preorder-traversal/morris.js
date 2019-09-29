/**
 * Morris遍历：左子树的最右结点.right = 右结点
 * 时间：O(N), 72ms
 * 空间：O(1), 33.8MB
 */
var preorderTraversal = function(root) {
  const res = []
  if (!root) return res
  
  while (root) {
    // 遍历该结点
    res.push(root.val)

    if (root.left) { // 如果存在左结点，则设置，并且往左走
      let rightmost = root.left
      while (rightmost.right) {
        rightmost = rightmost.right
      }
      rightmost.right = root.right // 关键

      root = root.left
    } else { // 如果不存在左结点，则往右走（right肯定不为null）
      root = root.right
    }
  }

  return res
};

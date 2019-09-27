/**
 * 中序遍历将BST化为数组，检查数组是否有序
 * 时间：O(N), 252ms
 * 空间：O(H), 52.8MB
 */
var isValidBST = function(root) {
  const arr = inOrder(root)
  return checkOrder(arr)
};

function inOrder (node) {
  if (!node) return []
  return [
    ...inOrder(node.left),
    node.val,
    ...inOrder(node.right)
  ]
}

function checkOrder (arr) {
  if (arr.length === 0) return true

  for (let i = 1; i < arr.length; ++i) {
    if (arr[i] <= arr[i - 1]) return false
  }
  return true
}
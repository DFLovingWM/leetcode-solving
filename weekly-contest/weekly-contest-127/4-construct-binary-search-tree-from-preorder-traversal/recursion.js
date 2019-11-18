/**
 * 选根 + 分割左右
 */
function bstFromPreorder (preorder) {
  if (preorder.length === 0) return null

  const subRoot = new TreeNode(preorder[0])
  let i
  for (i = 1; i < preorder.length; ++i) {
    if (preorder[i] > preorder[0]) {
      break
    }
  }
  subRoot.left = bstFromPreorder(preorder.slice(1, i))
  subRoot.right = bstFromPreorder(preorder.slice(i))
  return subRoot
};
/**
 * Recursion.
 * (In each recursion level)Find root node, recursively build left and right child.
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
function buildTree (preorder, inorder) {
  if (preorder.length === 0) return null // empty node
  if (preorder.length === 1) return new TreeNode(preorder[0]) // leaf node

  let rootVal = preorder[0]
  let root = new TreeNode(rootVal)

  let rootIndex = inorder.indexOf(rootVal) // Left slice means left child, so does right slice.

  root.left = buildTree(
    preorder.slice(1, rootIndex + 1),
    inorder.slice(0, rootIndex)
  )

  root.right = buildTree(
    preorder.slice(1 + rootIndex),
    inorder.slice(rootIndex + 1)
  )

  return root
}

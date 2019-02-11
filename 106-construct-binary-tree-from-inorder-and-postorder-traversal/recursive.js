/**
 * Recursion.
 * Find root node, recursively build left and right child.
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
function buildTree (inorder, postorder) {
  if (postorder.length === 0) return null // empty node
  if (postorder.length === 1) return new TreeNode(postorder[0]) // leaf node

  let rootVal = postorder[postorder.length - 1] // The last node is the root.
  let root = new TreeNode(rootVal)

  let rootIndex = inorder.indexOf(rootVal) // Left slice means left child, so does right slice.

  root.left = buildTree(
    inorder.slice(0, rootIndex),
    postorder.slice(0, rootIndex)
  )

  root.right = buildTree(
    inorder.slice(rootIndex + 1),
    postorder.slice(rootIndex, postorder.length - 1)
  )

  return root
}

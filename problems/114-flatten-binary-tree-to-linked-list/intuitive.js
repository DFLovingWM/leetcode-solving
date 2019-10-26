/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
function flatten (root) {
  if (!root) return

  let { left, right } = root

  flatten(left)
  flatten(right)

  root.left = null
  root.right = left
  
  let p = left
  while (p && p.right) {
    p = p.right
  }
  p.right = right
}

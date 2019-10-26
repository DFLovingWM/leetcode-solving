/**
 * @param {TreeNode} root
 * @return {string}
 */
function tree2str (root) {
  if (!root) return '' // Edge case.

  return `${helper(root)}`
}

function helper (node) {
  let ret = node.val

  if (node.left && node.right) {
    ret += `(${helper(node.left)})(${helper(node.right)})`
  } else if (node.left) {
    ret += `(${helper(node.left)})`
  } else if (node.right) {
    ret += `()(${helper(node.right)})`
  }

  return ret
}

module.exports = tree2str
/**
 * Recursion.
 * @param {TreeNode} root
 * @return {boolean}
 */
function isValidBST (root) {
  if (!root) return true

  let isValid = true

  function helper (node) {
    let leftMax = null, leftMin = null
    if (node.left) {
      let result = helper(node.left)
      if (!isValid) return
      leftMin = result[0]
      leftMax = result[1]
      if (leftMax >= node.val) {
        isValid = false
        return
      }
    } else {
      leftMax = leftMin = node.val
    }

    let rightMin = null, rightMax = null
    if (node.right) {
      let result = helper(node.right)
      if (!isValid) return
      rightMin = result[0]
      rightMax = result[1]
      if (rightMin <= node.val) {
        isValid = false
        return
      }
    } else {
      rightMax = rightMin = node.val
    }

    // console.log(`${node.val} : [${leftMax}, ${rightMin}]`)
    return [leftMin, rightMax]
  }

  helper(root)

  return isValid
}
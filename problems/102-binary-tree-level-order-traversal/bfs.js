/**
 * BFS
 * @param {TreeNode} root
 * @return {number[][]}
 */
function levelOrder (root) {
  if (!root) return [] // Case of empty tree.

  let queue = [root],
      result = []

  while (queue.length > 0) {
    let level = []
    let parentCount = queue.length

    while (parentCount--) { // Clincher!
      let curr = queue.shift()
      level.push(curr.val)
      if (curr.left) {
        queue.push(curr.left)
      }
      if (curr.right) {
        queue.push(curr.right)
      }
    }

    result.push(level)
  }

  return result
}

module.exports = levelOrder
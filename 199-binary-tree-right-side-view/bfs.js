/**
 * @param {TreeNode} root
 * @return {number[]}
 */
function rightSideView (root) {
  if (!root) return []

  let queue = [],
      result = []
  const ROOT_LEVEL = 0

  let last = new LeveledNode(root, ROOT_LEVEL)
  queue.push(last)

  while (queue.length > 0) {
    let curr = queue.shift()
    if (curr.level !== last.level) {
      result.push(last.node.val)
    }
    last = curr

    const { node } = curr

    if (node.left) {
      queue.push(new LeveledNode(node.left, last.level + 1))
    }
    
    if (node.right) {
      queue.push(new LeveledNode(node.right, last.level + 1))
    }
  }
  result.push(last.node.val)

  return result
}

function LeveledNode (node, level) {
  this.node = node
  this.level = level
}
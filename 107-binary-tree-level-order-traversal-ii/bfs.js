/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function (root) {
  if (!root) return []

  let levels = [],
      queue = new Queue()

  const ROOT_LEVEL = 0
  queue.push(new LeveledTreeNode(root, ROOT_LEVEL))

  let lastLevel = ROOT_LEVEL,
      lastNodeList = []

  while (!queue.empty()) {
    let { node, level } = queue.pop()

    if (level !== lastLevel) {
      levels.unshift(lastNodeList)
      lastNodeList = []
      lastLevel = level
    }
    lastNodeList.push(node.val)
    
    if (node.left) {
      queue.push(new LeveledTreeNode(node.left, level + 1))
    }

    if (node.right) {
      queue.push(new LeveledTreeNode(node.right, level + 1))
    }
  }
  levels.unshift(lastNodeList)

  return levels
}

/**
 * 
 * @param {TreeNode} node 
 * @param {Number} level 
 */
function LeveledTreeNode (node, level) {
  this.node = node
  this.level = level
}

module.exports = levelOrderBottom

class Queue {
  constructor (arr = []) {
    this.arr = arr
  }

  empty () {
    return this.arr.length === 0
  }

  push (newElement) {
    this.arr.push(newElement)
  }

  pop () {
    return this.arr.shift()
  }

  front () {
    return this.arr[0]
  }

  back () {
    return this.arr[this.arr.length - 1]
  }
}
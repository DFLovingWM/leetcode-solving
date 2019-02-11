/**
 * 二叉树结点类
 */
function TreeNode (val) {
  this.val = val
  this.left = this.right = null
}

class Queue {
  constructor (arr = []) {
    this.arr = Array.from(arr)
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

/**
 * @param {Number[]} arr 树的数组表达(类似于BFS，唯一不同就是用null表示空结点)
 * @returns {TreeNode} 构建出来的二叉树的根结点
 */
function constructionBinaryTree (arr) {
  if (!arr || arr.length === 0) { // 输入为空树
    return null
  }

  let values = new Queue(arr),
      nodes = new Queue()
  
  let rootVal = values.pop()
  let root = rootVal === null ? null : new TreeNode(rootVal)
  nodes.push(root)

  while (!values.empty()) {
    let node = nodes.pop() // Current node.

    let leftVal = values.pop() // Left child.
    if (leftVal !== null) {
      node.left = new TreeNode(leftVal)
      nodes.push(node.left)
    }

    if (!values.empty()) {
      let rightVal = values.pop() // Right child.
      if (rightVal !== null) {
        node.right = new TreeNode(rightVal)
        nodes.push(node.right)
      }
    }
  }

  return root // Return root, which represents the whole tree.
}

module.exports = constructionBinaryTree
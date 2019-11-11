// 反序列化：数组 => 树
// BFS
exports.deserialize = function (arr) {
  if (arr.length === 0) return null

  let i = 0
  const root = new TreeNode(arr[i++])
  const queue = new Queue() // 存放待遍历结点
  queue.push(root)

  while (!queue.empty()) {
    const curr = queue.pop()

    const l = i < arr.length ? arr[i++] : null
    if (l !== null) {
      curr.left = new TreeNode(l)
      queue.push(curr.left)
    }

    const r = i < arr.length ? arr[i++] : null
    if (r !== null) {
      curr.right = new TreeNode(r)
      queue.push(curr.right)
    }
  }

  return root
}

// 序列化：树 => 数组
// BFS（层次遍历）
exports.serialize = function (root) {
  const levels = []
  let currQueue = [root] // 本层结点

  while (currQueue.length > 0) {
    levels.push(currQueue.map(node => node ? node.val : null))

    const nextQueue = []
    for (const curr of currQueue) {
      if (curr !== null) { // 有效结点
        nextQueue.push(curr.left)
        nextQueue.push(curr.right)
      } 
    }
    currQueue = nextQueue
  }

  const res = levels.reduce((acc, arr) => acc.concat(arr), [])
  // 最后的null不输出
  while (res[res.length - 1] === null) res.pop()
  return res
}

// 二叉树结点
function TreeNode (val) {
  this.val = val
  this.left = this.right = null
}

// 队列
class Queue {
  constructor () {
    this.arr = []
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
}
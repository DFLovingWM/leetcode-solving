/**
 * BFS
 * 时间：672ms
 * 空间：80.1MB
 */
var levelOrder = function(root) {
  if (!root) return []

  const queue = new Queue()
  queue.push(new Element(root, 0))
  const res = []

  while (!queue.empty()) {
    const { node, level } = queue.pop()
    const lastLevel = res.length - 1

    // 处理本结点
    if (level > lastLevel) {
      res.push([])
    }
    res[level].push(node.val)

    // 处理子结点
    for (const child of node.children) {
      queue.push(new Element(child, level + 1))
    }
  }

  return res
};

// 队列
class Queue {
  constructor () {
    this.arr = []
  }

  empty () {
    return this.arr.length === 0
  }

  push (x) {
    this.arr.push(x)
  }

  pop () {
    return this.arr.shift()
  }
}

// 队列内结点
function Element (node, level) {
  this.node = node
  this.level = level
}
function Node (val, neighbors) {
  this.val = val;
  this.neighbors = neighbors;
};

/**
 * 深拷贝，递归法
 * 时间：120ms
 */
var cloneGraph = function(node, old2New = new WeakMap()) {
  if (old2New.has(node)) {
    // 循环引用，直接取Map中的映射
    return old2New.get(node)
  }

  const newNode = new Node(node.val, [])
  old2New.set(node, newNode) // 保存映射关系
  for (const neighbor of node.neighbors) {
    newNode.neighbors.push(cloneGraph(neighbor, old2New))
  }
  return newNode
};
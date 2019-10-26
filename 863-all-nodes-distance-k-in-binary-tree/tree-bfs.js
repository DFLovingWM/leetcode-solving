/**
 * 添加父指针，然后BFS
 * 
 * 时间：84ms
 */
var distanceK = function (root, target, K) {
  if (!root) return [] // 边界用例
  return bfs(target, addParent(root), K)
};

// 给二叉树所有结点增加指向父结点的边
// 为了避免直接mutate这棵树，用HashMap记录
function addParent (root) {
  const parent = new Map()

  function preOrder (node) {
    if (!node) return

    if (node.left) parent.set(node.left, node)
    if (node.right) parent.set(node.right, node)

    preOrder(node.left)
    preOrder(node.right)
  }

  preOrder(root)
  return parent
}

// 层次遍历（至多遍历K层）
function bfs (target, parent, K) {
  let curr = []
  let visit = new Set()

  curr.push(target)
  visit.add(target)

  while (K--) {
    const next = []
    for (const i of curr) {
      const nexts = []

      if (i.left) nexts.push(i.left)
      if (i.right) nexts.push(i.right)
      if (parent.has(i)) nexts.push(parent.get(i))

      for (const j of nexts) {
        if (!visit.has(j)) {
          visit.add(j)
          next.push(j)
        }
      }
    }
    // 将答案更新为下一层
    curr = next
  }

  return curr.map(node => node.val)
}

module.exports = distanceK
/**
 * 化为图，然后BFS
 * 
 * 时间：76ms
 */
var distanceK = function (root, target, K) {
  if (!root) return [] // 边界用例

  const nexts = buildGraph(root)
  return bfs(target.val, nexts, K)
};

// 二叉树化为邻接表
function buildGraph (root) {
  const nexts = new Array(502).fill(0).map(() => []) // 邻接表

  // 递归遍历`node`：建立`node`与左右子结点的双向边
  function preOrder (node) {
    if (node.left) {
      nexts[node.val].push(node.left.val)
      nexts[node.left.val].push(node.val)
    }
    if (node.right) {
      nexts[node.val].push(node.right.val)
      nexts[node.right.val].push(node.val)
    }

    if (node.left) preOrder(node.left)
    if (node.right) preOrder(node.right)
  }

  preOrder(root)
  return nexts
}

// 层次遍历（至多遍历K层）
function bfs (start, nexts, K) {
  let curr = []
  let visit = new Set()

  curr.push(start)
  visit.add(start)

  while (K--) {
    const next = []
    for (const i of curr) {
      for (const j of nexts[i]) {
        if (!visit.has(j)) {
          visit.add(j)
          next.push(j)
        }
      }
    }
    // 将答案更新为下一层
    curr = next
  }

  return curr
}

module.exports = distanceK
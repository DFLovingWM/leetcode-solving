/**
 * 将树结点坐标化（给个下标）
 * 参考[C++ 坐标化处理](https://leetcode-cn.com/problems/all-nodes-distance-k-in-binary-tree/solution/c-zuo-biao-hua-chu-li-by-da-li-wang/)
 * 
 * 时间：约为O(NlogN), 88ms
 */
var distanceK = function (root, target, K) {
  const index = giveIndex(root)
  const targetIndex = index.get(target)
  const res = []
  for (const [node, i] of index) { // 遍历所有结点
    if (distance(targetIndex, i) === K) { // 与目标结点相距K
      res.push(node.val)
    }
  }
  return res
};

// 给予每个结点一个下标（模仿二叉堆的下标）
function giveIndex (root) {
  const res = new Map()
  
  function preOrder (node, i) {
    if (!node) return

    res.set(node, i)
    preOrder(node.left, i * 2 + 1)
    preOrder(node.right, i * 2 + 2)
  }

  preOrder(root, 0)
  return res
}

// 计算下标之间的距离（关键！）
// 平均时间复杂度：O(H)
function distance (i, j) {
  let res

  // 下标往上走（缩小），直到相等。每上移一次就算一步
  for (res = 0; i !== j; ++res) {
    if (i > j) {
      i = Math.floor((i - 1) / 2)
    } else {
      j = Math.floor((j - 1) / 2)
    }
  }

  return res
}

module.exports = distanceK
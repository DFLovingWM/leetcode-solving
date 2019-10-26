/**
 * 回溯（带返回值，类似后序）
 * 
 * 时间：92ms
 */
var pathSum = function (root, sum) {
  return backtrack(root, sum)
};

function backtrack (node, sum) {
  if (!node) return []

  if (!node.left && !node.right) {
    if (node.val === sum) return [[node.val]]
    return []
  }

  const res = []
  for (const segment of backtrack(node.left, sum - node.val).concat(backtrack(node.right, sum - node.val))) {
    res.push([node.val, ...segment])
  }
  return res
}
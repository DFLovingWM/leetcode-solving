/**
 * 回溯（无返回值，类似前序）
 * 
 * 时间：92ms
 */
var pathSum = function (root, sum) {
  const res = []
  if (!root) return res

  backtrack(root, sum, [], res)
  return res
};

function backtrack (node, sum, acc, res) {
  if (!node.left && !node.right) {
    if (sum === node.val) {
      res.push(acc.concat(node.val))
    }
    return
  }

  acc.push(node.val)
  if (node.left) backtrack(node.left, sum - node.val, acc, res)
  if (node.right) backtrack(node.right, sum - node.val, acc, res)
  acc.pop() // 回头
}
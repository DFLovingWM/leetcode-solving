const modulo = Math.pow(10, 9) + 7
let result

/**
 * 1. DFS
 * 2. 因为存在`modulo`，根结点使用`parseInt(N, 2)`不可靠，只能使用`N = N * 2 + v`并且一路取模
 * 3. 累加时也要一路取模
 */
var sumRootToLeaf = function(root) {
  result = 0
  helper(root, '')
  return result
};

function helper (node, acc) {
  acc = (acc * 2 % modulo + node.val) % modulo // 1
  if (!node.left && !node.right) {
    result = (result + acc) % modulo // 2
    return
  }
  if (node.left) helper(node.left, acc)
  if (node.right) helper(node.right, acc)
}

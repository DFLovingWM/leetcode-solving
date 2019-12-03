/**
 * 将BST通过中序遍历、化为有序数组，最小差只会出现在相邻元素
 */
var getMinimumDifference = function (root) {
  
  // 中序遍历
  function inOrder (node) {
    if (!node) return []
    return [...inOrder(node.left), node.val, ...inOrder(node.right)]
  }

  const arr = inOrder(root) // 有序数组
  let res = Infinity

  for (let i = 1; i < arr.length; ++i) {
    res = Math.min(res, arr[i] - arr[i - 1])
  }

  return res
};
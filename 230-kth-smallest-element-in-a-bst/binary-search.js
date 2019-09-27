/**
 * 二分查找：
 * 设当前(middle)是第C小元素（小于等于它的有C个），如果：
 * - C < K，走右边
 * - C > K，走左边
 * 
 * 时间：O(NH), 112ms
 */
var kthSmallest = function(root, K) {
  const C = 1 + countNodes(root.left)
  if (C === K) return root.val
    
  return K > C ?
    kthSmallest(root.right, K - C) : // 注意：从右边开始找的话，要减去左边的数量，所以是右边的第(K - C)小
    kthSmallest(root.left, K)
};

// O(N)
function countNodes (node) {
  if (!node) return 0
  return countNodes(node.left) + countNodes(node.right) + 1
}

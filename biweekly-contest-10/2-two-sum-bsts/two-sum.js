/**
 * 2个有序数组上的Two Sum
 * 
 * 时间：O(N), 288ms
 */
var twoSumBSTs = function (root1, root2, target) {
  const A = inOrder(root1)
  const B = inOrder(root2)

  let [L, R] = [0, B.length - 1]

  while (L < A.length && R >= 0) {
    const sum = A[L] + B[R]

    if (sum === target) return true
    if (sum < target) {
      ++L
    } else {
      --R
    }
  }

  return false
};

function inOrder (node) {
  if (!node) return []
  return [
    ...inOrder(node.left),
    node.val,
    ...inOrder(node.right)
  ]
}
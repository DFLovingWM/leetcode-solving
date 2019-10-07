/**
 * 中序遍历，合并2个有序数组，Two Sum
 */
var twoSumBSTs = function (root1, root2, target) {
  const A = inOrder(root1)
  const B = inOrder(root2)

  const arr = []
  let [a, b] = [0, 0]
  while (a < A.length && b < B.length) {
    if (A[a] < B[b]) {
      arr.push(A[a++])
    } else {
      arr.push(B[b++])
    }
  }
  if (a < A.length) arr.push(...A.slice(a))
  if (b < B.length) arr.push(...B.slice(b))

  let [L, R] = [0, arr.length - 1]
  while (L < R) {
    const sum = arr[L] + arr[R]
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
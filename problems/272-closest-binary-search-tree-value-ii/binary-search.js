/**
 * 中序遍历化为有序数组，再进行二分查找
 * 时间：O(N + log(N - K)) = O(N), 76ms
 */
var closestKValues = function(root, target, K) {
  const arr = inOrder(root)

  let [left, right] = [0, arr.length - K]
  while (left < right) {
    const middle = left + (right - left >> 1)
    if (target - arr[middle] <= arr[middle + K] - target) {
      right = middle
    } else {
      left = middle + 1
    }
  }
  return arr.slice(left, left + K)
};

function inOrder (node) {
  if (!node) return []

  return [
    ...inOrder(node.left),
    node.val,
    ...inOrder(node.right)
  ]
}
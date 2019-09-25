/**
 * 中序遍历化为有序数组，再进行头尾指针排除法
 * 时间：O(N + (N - K)) = O(N), 88ms
 */
var closestKValues = function(root, target, K) {
  const arr = inOrder(root)

  let [left, right] = [0, arr.length]
  while (right - left > K) {
    let leftDiff = Math.abs(arr[left] - target)
    let rightDiff = Math.abs(arr[right - 1] - target)
    if (leftDiff > rightDiff) {
      ++left
    } else if (leftDiff <= rightDiff) {
      --right
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
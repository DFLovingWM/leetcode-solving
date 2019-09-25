/**
 * 二叉遍历，同时更新答案
 * 时间：O(logN), 64ms
 */
var closestValue = function(root, target) {
  let cur = root.val // 当前结点值
  let next = Infinity // 下一个结点值（左或右子结点）
  if (root.right && target > root.val) {
    next = closestValue(root.right, target)
  } else if (root.left && target < root.val) {
    next = closestValue(root.left, target)
  }
  return Math.abs(cur - target) <= Math.abs(next - target) ? cur : next // 返回更接近的
};

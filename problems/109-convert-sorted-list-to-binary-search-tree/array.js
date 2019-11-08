/**
 * 先转化为数组，再二分
 * 
 * 时间：O(N + logN) = O(N)
 * 空间：O(N)
 */
var sortedListToBST = function (head) {
  const arr = []
  for (let p = head; p; p = p.next) {
    arr.push(p.val)
  }
  return helper(arr, 0, arr.length)
};

function helper (arr, left, right) {
  if (right - left <= 0) return null

  const mid = Math.floor((left + right) / 2)
  const res = new TreeNode(arr[mid])
  res.left = helper(arr, left, mid)
  res.right = helper(arr, mid + 1, right)
  return res
}

function TreeNode (val) {
  this.val = val
  this.left = this.right = null
}

module.exports = sortedListToBST
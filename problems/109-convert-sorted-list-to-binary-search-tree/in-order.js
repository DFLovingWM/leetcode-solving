/**
 * 中序遍历
 * 
 * 时间：O(N), 76ms
 * 空间：O(N)
 */
var sortedListToBST = function (head) {
  let n = 0
  for (let p = head; p; p = p.next) ++n

  function inOrder (L, R) {
    if (R - L <= 0) return null

    const M = Math.floor((L + R) / 2)
    // 先左
    const left = inOrder(L, M)
    // 中
    const node = new TreeNode(head.val)
    head = head.next
    node.left = left
    // 右
    node.right = inOrder(M + 1, R)
    return node
  }

  return inOrder(0, n)
};

function TreeNode (val) {
  this.val = val
  this.left = this.right = null
}

module.exports = sortedListToBST
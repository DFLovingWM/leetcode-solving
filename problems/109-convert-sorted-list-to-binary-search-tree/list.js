/**
 * 直接在链表上二分
 * 
 * 时间：`O(NlogN),` 92ms
 * 空间：`O(logN)`
 */
var sortedListToBST = function (head) {
  if (!head) return null
  if (!head.next) return new TreeNode(head.val)
  
  const mid = split(head)
  const node = new TreeNode(mid.val)

  node.left = sortedListToBST(head)
  node.right = sortedListToBST(mid.next)
  return node
};

// O(N)
function split (head) {
  let [prev, slow, fast] = [null, head, head]
  while (fast && fast.next) {
    fast = fast.next.next
    prev = slow
    slow = slow.next
  }
  if (prev) {
    prev.next = null // 切断
  }
  return slow
}

function TreeNode (val) {
  this.val = val
  this.left = this.right = null
}

module.exports = sortedListToBST
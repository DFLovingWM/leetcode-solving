/**
 * 递归法：前序遍历
 * 
 * 时间：O(N)
 * 空间：O(N)
 */
function reverseList (head) {
  let res = null

  function dfs (prev, curr) {
    if (!curr) return

    const next = curr.next
    curr.next = prev
    if (!next) res = curr
    dfs(curr, next)
  }

  if (head) dfs(null, head)
  return res
}

module.exports = reverseList
/**
 * HashSet判重
 * 
 * 时间：80ms
 */
var hasCycle = function (head) {
  const visit = new Set()
  while (head) {
    if (visit.has(head)) {
      return true
    }
    visit.add(head)
    head = head.next
  }
  return false
};